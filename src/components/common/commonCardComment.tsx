'use client';
import { CommonCardCommentProps } from '@/src/types/types';
import { Avatar, Card, CardFooter } from '@heroui/react';
import React from 'react';

export default function CommonCardComment({
  text = '',
  name = 'Unknown',
  date = '12 مرداد 1403',
  imageUrl = 'https://heroui.com/avatars/avatar-1.png',
  isActive = false,
}: CommonCardCommentProps) {
  const bgColor = isActive ? '#7575FE' : '#F9F9F9';
  const txtColor = isActive? 'white': ''
  return (
    <Card
      className={`min-w-[350px] rounded-3xl p-2 h-[350px] aspect-square transition-colors duration-300 text-${txtColor} bg-[${bgColor}]`}
      shadow="none"
    >
      <p className="p-2 px-3">{text}</p>
      <CardFooter className="gap-4">
        <Avatar radius="full" size="md" src={imageUrl} />
        <div>
          <p className="font-semibold">{name}</p>
          <p className="font-light">{date}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
