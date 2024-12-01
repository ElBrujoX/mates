import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const avatars = [
  'https://i.imgur.com/yGOQVSd.png',
  'https://i.imgur.com/IZY5ibI.png',
  'https://i.imgur.com/vqdjKOP.png',
  'https://i.imgur.com/MyVY8vD.png',
  'https://i.imgur.com/f66Lwad.png'
];

export function FloatingAvatars() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {avatars.map((avatar, index) => (
        <motion.div
          key={index}
          className={cn(
            "absolute w-16 h-16 rounded-full overflow-hidden",
            "backdrop-blur-sm border-2 border-white/30",
            "shadow-lg shadow-purple-500/30"
          )}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 1,
            scale: 1,
            x: [
              Math.cos(index * (2 * Math.PI / avatars.length)) * 300,
              Math.sin(index * (2 * Math.PI / avatars.length)) * 300
            ],
            y: [
              Math.sin(index * (2 * Math.PI / avatars.length)) * 300,
              Math.cos(index * (2 * Math.PI / avatars.length)) * 300
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.2
          }}
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        >
          <img
            src={avatar}
            alt=""
            className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
}

