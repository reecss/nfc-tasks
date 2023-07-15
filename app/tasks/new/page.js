'use client';

import React from 'react';
import NFCWriter from '../../components/NFCScanner/NFCWriter';

export default function NewTask() {
  const [name, setName] = React.useState('');
  const [isWritten, setIsWritten] = React.useState(false);

  const onWrite = () => {
    setIsWritten(true);
  }

  let isWrittenMessage = isWritten ? 'Tag written' : 'Ready to write';
    
  return (
    <main className="min-h-screen items-center justify-between p-24">
      <div className="relative place-items-center">
          <h1 className="text-2xl font-bold mb-3">Create a Task</h1>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="items-center justify-between">
                    <NFCWriter payload={name} onWrite={onWrite} />
                </div>
                <div className="items-center justify-between">
                    {isWrittenMessage}
                </div>
            </form>
      </div>
    </main>
  )
}