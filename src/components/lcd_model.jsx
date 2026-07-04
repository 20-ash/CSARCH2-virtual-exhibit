import { useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TextureLoader, CanvasTexture, RepeatWrapping } from "three";
import lcdTextureSrc from "../assets/lcd.jpg";

const canvasWrapper = {
    width: "100%",
    minHeight: "500px",
    height: "500px",
};

function BacklightSheet({ z }) {
    const tubes = [];
    const positions = [
        [-0.8, 0.6], [0, 0.6], [0.8, 0.6],
        [-0.8, -0.6], [0, -0.6], [0.8, -0.6],
    ];
    positions.forEach(([x, y]) => {
        tubes.push(
            <mesh position={[x, y, 0.1]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.08, 0.08, 2.5, 12]} />
                <meshStandardMaterial color="white" emissive="#ffffee" emissiveIntensity={1.5} />
            </mesh>
        );
    });

    return (
        <group position={[0, 0, z]}>
            <mesh>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial color="white" side={2} />
            </mesh>
            {tubes}
        </group>
    );
}

function Polarizer({ z, rotation = 0 }) {
    return (
        <mesh position={[0, 0, z]} rotation={[0, 0, rotation]}>
            <boxGeometry args={[3.8, 2.8, 0.05]} />
            <meshStandardMaterial color="#333" transparent opacity={0.6} />
        </mesh>
    );
}

function LiquidCrystalLayer({ z }) {
    const texture = useMemo(() => {
        const size = 512;
        const cellSize = 32;

        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        const imageData = ctx.createImageData(size, size);
        const data = imageData.data;

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const cx = Math.floor(x / cellSize);
                const cy = Math.floor(y / cellSize);
                const h = ((cx * 374761393 + cy * 668265263) >>> 0);
                const hash = ((h ^ (h >> 13)) * 1274126177) >>> 0;
                const val = (hash & 0xFF) / 255;

                const i = (y * size + x) * 4;
                const b = 180 + Math.floor(val * 60);
                data[i] = b + 20;
                data[i + 1] = b + 10;
                data[i + 2] = b + 30;
                data[i + 3] = 150 + Math.floor(val * 80);
            }
        }

        imageData.data.set(data);
        ctx.putImageData(imageData, 0, 0);

        const tex = new CanvasTexture(canvas);
        tex.wrapS = tex.wrapT = RepeatWrapping;
        tex.repeat.set(4, 4);
        return tex;
    }, []);

    return (
        <mesh position={[0, 0, z]}>
            <boxGeometry args={[3.8, 2.8, 0.15]} />
            <meshStandardMaterial map={texture} transparent opacity={0.8} roughness={0.6} />
        </mesh>
    );
}

function RgbColorFilters({ z }) {
    const texture = useMemo(() => {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 128;
        const ctx = canvas.getContext("2d");

        const stripeW = canvas.width / 3;
        ctx.fillStyle = "rgba(255, 0, 0, 0.7)";
        ctx.fillRect(0, 0, stripeW, canvas.height);
        ctx.fillStyle = "rgba(0, 255, 0, 0.7)";
        ctx.fillRect(stripeW, 0, stripeW, canvas.height);
        ctx.fillStyle = "rgba(0, 0, 255, 0.7)";
        ctx.fillRect(stripeW * 2, 0, stripeW, canvas.height);

        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(stripeW - 2, 0, 4, canvas.height);
        ctx.fillRect(stripeW * 2 - 2, 0, 4, canvas.height);

        return new CanvasTexture(canvas);
    }, []);

    return (
        <mesh position={[0, 0, z]}>
            <planeGeometry args={[3.6, 2.6]} />
            <meshStandardMaterial map={texture} transparent opacity={0.8} side={2} />
        </mesh>
    );
}

function LcdPanel({ z }) {
    const textureSrc = typeof lcdTextureSrc === "string" ? lcdTextureSrc : lcdTextureSrc.src;
    const texture = useLoader(TextureLoader, textureSrc);
    return (
        <mesh position={[0, 0, z]} >
            <planeGeometry args={[3.6, 2.6]} />
            <meshStandardMaterial map={texture} side={2} />
        </mesh>
    );
}

export default function LcdModel({ backlightType, layout, exploded }) {
    const gap = exploded ? 0.7 : 0.05;

    return (
        <div style={canvasWrapper}>
            <Canvas camera={{ position: [0, 1, 4], fov: 80 }} gl={{ preserveDrawingBuffer: true, antialias: true }} dpr={[1, 2]}>
                <color attach="background" args={["#578f6a"]} />
                <ambientLight intensity={0.4} />
                <directionalLight position={[2, 3, 5]} intensity={0.8} />

                <group position={[0, 0, 1.5]}>
                    <BacklightSheet z={-5 * gap} />
                    <Polarizer z={-4 * gap} rotation={0} />
                    <LiquidCrystalLayer z={-3 * gap} />
                    <Polarizer z={-2 * gap} rotation={Math.PI / 2} />
                    <RgbColorFilters z={-1 * gap} />
                    <LcdPanel z={0} />
                </group>

                <OrbitControls enableDamping={false} target={[0, 0, 1.5 - 2.5 * gap]} />
            </Canvas>
        </div>
    );
}
