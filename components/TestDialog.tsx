'use client';

import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import anno from '../public/FSIE Expo Meet & Talk Announcement.png';

export default function TestDialog() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Dialog</h1>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <button 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setIsOpen(true)}
          >
            Open Dialog
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
          <div className="space-y-6">
            {/* Featured Full Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src={anno}
                alt="FSIE Fire & Security India Expo 2025 - Official Announcement"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-sphere-white mb-4">
                FSIE FIRE & SECURITY INDIA EXPO 2025
              </h2>
              <p className="text-lg text-sphere-white/80 mb-6">
                8th Edition | September 11-13, 2025
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}