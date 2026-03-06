"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const WaveBackground = () => {
  const meshRef = useRef();

  const count = 50;
  const [positions, step] = useMemo(() => {
    const positions = new Float32Array(count * count * 3);
    let step = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        positions[step++] = x - count / 2;
        positions[step++] = 0;
        positions[step++] = z - count / 2;
      }
    }
    return [positions, step];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    let i = 0;
    for (let x = 0; x < count; x++) {
      for (let z = 0; z < count; z++) {
        const y = Math.sin(x * 0.3 + t) * 0.5 + Math.cos(z * 0.3 + t) * 0.5;
        meshRef.current.geometry.attributes.position.setY(i, y);
        i++;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#ec4899" sizeAttenuation={true} transparent opacity={0.6} />
    </points>
  );
};

const FooterSection = () => {
  return (
    <footer className="relative bg-[#0a0a2e] text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 10, 20], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <WaveBackground />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold tracking-wider">EduSelf</h1>
          <p className="text-gray-300 text-sm">
            Empowering students to access every book digitally and learn from anywhere.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-pink-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-pink-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-pink-400 transition"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-pink-400 transition"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-500 w-fit pb-1">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Departments</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-500 w-fit pb-1">Contact Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><MapPin size={18} className="text-pink-500"/> 123 Barishal, Bangladesh</li>
            <li className="flex items-center gap-2"><Phone size={18} className="text-pink-500"/> +880 164 311 0638</li>
            <li className="flex items-center gap-2"><Mail size={18} className="text-pink-500"/> support@eduself.com</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4 border-b border-pink-500 w-fit pb-1">Subscribe</h2>
          <p className="text-gray-300 mb-4 text-sm">Get the latest updates about new books and resources.</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white outline-none focus:border-pink-500"
            />
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 transition px-5 py-2 rounded-md font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm pb-6">
        &copy; {new Date().getFullYear()} EduSelf. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;