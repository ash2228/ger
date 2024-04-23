import React from 'react'

function Page() {
  return (
    <div
  class="h-auto absolute bottom-0 w-[100vw] lg:mx-auto bg-white dark:bg-zinc-800 shadow-md rounded-lg overflow-hidden"
>
  <div class="flex flex-col h-[85vh] lg:h-[92vh] mb-0">
    <div class="px-4 py-3 border-b dark:border-zinc-700">
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-semibold text-zinc-800 dark:text-white">
          Chatbot Assistant
        </h2>
        <div class="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Online
        </div>
      </div>
    </div>
    <div
      class="flex-1 p-3 overflow-y-auto flex flex-col space-y-2"
      id="chatDisplay"
    >
      <div
        class="chat-message self-start bg-zinc-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
      >
        Hello! How can I assist you today?
      </div>
      <div
        class="chat-message self-end bg-blue-500 text-white max-w-xs rounded-lg px-3 py-1.5 text-sm"
      >
        Type Something...
      </div>
    </div>
    <div class="px-3 py-2 border-t dark:border-zinc-700">
      <div class="flex gap-2">
        <input
          placeholder="Type your message..."
          class="flex-1 p-2 border rounded-lg dark:bg-zinc-700 dark:text-white dark:border-zinc-600 text-sm"
          id="chatInput"
          type="text"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-lg transition duration-300 ease-in-out text-sm"
          id="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default Page