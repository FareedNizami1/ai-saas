"use client";

import * as z from "zod"
import { MessageSquare } from 'lucide-react'
import { useForm } from 'react-hook-form'

import Heading from '@/components/Heading'


export default function ConversationPage() {
  const form = useForm({
    defaultValues: {
      prompt: ""
    }
  })
  return (
    <div>
      <Heading
      title="Conversation"
      description="Our most advanced conversation model."
      icon={MessageSquare}
      iconColor="text-violet-500"
      bgColor="bg-violet-500/10"
      />

    </div>
  )
}
