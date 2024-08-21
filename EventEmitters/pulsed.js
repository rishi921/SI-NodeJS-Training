import { Pulser } from "./pulser.js";

//Instantiate a Pulse Instance
const pulser = new Pulser();
// Register the pulse event event with Handler function
pulser.on('pulse', () => {
    console.log(`A pulse is received at time ${new Date().toISOString()}`)
})

pulser.start()