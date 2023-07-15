'use client';

import React, { useState } from 'react';

const NFCWriter = ({payload, onWrite, onError}) => {
    let ndef;
    const decoder = new TextDecoder();
    const [scanning, setScanning] = useState(false);
    const [output, setOutput] = useState([]);
    let scanMessage = scanning ? 'Scanning...' : 'Ready to scan';

    if ('NDEFReader' in window) {
        ndef = new NDEFReader();
    }
    else {
        ndef = null;
    }
    
    const write = async () => {
        if (!ndef) {
            return;
        }
        
        setScanning(true);

        try {
            await ndef.write(payload)
                .then(() => {
                    onWrite();
                })
                .catch((error) => {
                    onError(error);
                })
                .finally(() => {
                    setScanning(false);
                });
        }
        catch (error) {
            console.log(error);
            setScanning(false);
        }
    }
    
    if (!ndef) {
        return (
            <p>Your browser does have NFC functionality. Please reload this page on a
            device that does. For nerd info on browser support, click <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API#browser_compatibility"
            target="_blank">here</a>.</p>
        )
    }
    else {
        return (
            <div>
                <h1>{scanMessage}</h1>
                <button type="button" onClick={write}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                >Write to tag</button>
                <ul>
                    {output}
                </ul>
            </div>
        );
    }
}

export default NFCWriter;