/* eslint-disable no-unused-vars */
import { useState } from 'react'
import '../css/QRCodePages.css'
import QrScanner from 'qr-scanner'
import { Box, Fab, Typography } from '@mui/material'
import { QrCodeScanner, Stop } from '@mui/icons-material'

let stopScan = false
let scanResult = ''

// eslint-disable-next-line react/prop-types
function QRCodeScanningPageCentraManager({setData, setNavigation}) {
  const [btnScan, setBtnScan] = useState(true);

  const scanNow = async (isScan) => {
    setBtnScan(isScan)
    if (isScan) stopScan = true
    if (btnScan === false) return
    stopScan = false
    await new Promise(r => setTimeout(r, 100))
    const videoElement = document.getElementById('scanView')
    const scanner = new QrScanner(
      videoElement,
      result => {
        scanResult = result.data
        setData(result.data)
        setBtnScan(true)
        stopScan = true
        setNavigation(
          [[false, false], 
          [false, false, false, false, false, false, false, false, false, false], 
          [false, false, false, true, false], 
          [false, false, false], 
          [false, false, false]])
      },
      {
        onDecodeError: error => {
          console.error(error)
        },
        maxScansPerSecond: 1,
        highlightScanRegion: true,
        highlightCodeOutline: true,
        returnDetailedScanResult: true
      }
    )
    await scanner.start()
    while (stopScan === false) await new Promise(r => setTimeout(r, 100))
    scanner.stop()
    scanner.destroy()
  }

  return (
    <div>
          <Box
            sx={{
              height: "100vh",
              width: "100vw",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              paddingTop: "64px",
            }}
          >
            {btnScan === false && (
              <video
                id="scanView"
                style={{
                  width: "100%",
                  height: "100%",
                  borderStyle: "dotted",
                }}
              ></video>
            )}
          </Box>
          <Fab
            color={btnScan ? "primary" : "secondary"}
            onClick={() => scanNow(!btnScan)}
            disableRipple={true}
            disableTouchRipple={true}
            disableFocusRipple={true}
            sx={{ position: "absolute", bottom: 16, right: 16, backgroundColor: "#BDE6AA"}}
          >
            {btnScan && <QrCodeScanner />}
            {btnScan === false && <Stop />}
          </Fab>
      </div>
  );
}

export default QRCodeScanningPageCentraManager