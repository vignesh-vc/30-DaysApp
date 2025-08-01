import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'


const messageForm = () => {

  const [message, setMessage] = useState<string>("");
  const [delay, setDelay] = useState<number>(10);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
  const [sendMessage, setSendMessage] = useState<string>("");


  const handleSend = () => {
    setIsSending(true)
    const id = setTimeout(() => {
      setSendMessage(message);
      setMessage("");
      setIsSending(false)
    }, delay * 1000)

    setTimerId(id)
  }

  const handleCancel = () => {
    if (timerId) clearTimeout(timerId);
    setIsSending(false)
  }

  return (
    <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4 '>
      <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button</h2>
      <Textarea placeholder='Type your message...'
        value={message} onChange={(e) => setMessage(e.target.value)} />

      <Input type='number' placeholder='Delay in Seconds' value={delay} onChange={(e) => { setDelay(Number(e.target.value)) }}
        disabled={isSending}
      />

      {!isSending ? (
        <Button className='w-full' onClick={handleSend}>
          Send With Delay
        </Button>

      ) : (<Button className='w-full' variant='destructive' onClick={handleCancel}>
        Cancel Sending
      </Button>)

      }


      {sendMessage && (<div className='bg-green-100 border rounded p-3 text-green-900'>
          <p className='font-semibold'>Message Send:</p>
          <p>{sendMessage}</p>
        </div>)
      }


    </div>
  )
}

export default messageForm