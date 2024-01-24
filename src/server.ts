import express from 'express';
import { getPayloadClient } from './get-payload';
import { nextApp, nextHandler } from './next-utils';

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
const payload = await getPayloadClient({
    initOptions: {
      express: app,
      secret:process.env.PAYLOAD_SECRET || '',
      onInit: async(cms) => {
        cms.logger.info(`Admin url ${cms.getAdminURL()}`);
      }
    },
  
});
app.use((req,res)=>nextHandler(req,res) )
nextApp.prepare().then(()=>{
  // payload.logger./info(`Next js started`)
})
app.listen(PORT,()=>{
  // payload.logger.info(`Next js URK started on port ${process.env.NEXT_PUBLIC_SERVER_URL}`)
})

}

start()
