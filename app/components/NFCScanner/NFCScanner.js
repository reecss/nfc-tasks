'use client';

import React, { useEffect, useState } from 'react';

const NFCScanner = () => {
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

    useEffect(() => {
        if (!ndef) {
            return;
        }

        ndef.addEventListener("reading", ({ message, serialNumber }) => {
            setOutput(message.records.map((record) => (<li>{decoder.decode(record.data)}</li>)));
            setScanning(false);
        });
    }, []);
    
    const scan = async () => {
        if (!ndef) {
            return;
        }
        
        setScanning(true);

        try {
            await ndef.scan();
        }
        catch (error) {
            console.log(error);
            setScanning(false);
        }
    }
    
    if (!ndef) {
        return (
            <p>Your browser does not support NFC. Please reload this page on a
            device that does. For nerd info on browser support, click <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API#browser_compatibility"
            target="_blank">here</a>.</p>
        )
    }
    else {
        return (
            <div>
                <h1>{scanMessage}</h1>
                <button type="button" onClick={scan}>Scan</button>
                <ul>
                    {output}
                </ul>
            </div>
        );
    }
}

export default NFCScanner;