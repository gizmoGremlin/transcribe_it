// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
   console.log("here "+req.body)

        console.log("return: "+res.text )
  res.status(200).json({ text: res.text })
}

// export const config = {
//   api: {
//     responseLimit: false,
//     // responseLimit: '8mb',
//   },
// }

export const config = {
  api: {
    responseLimit: false, 
  bodyparser:{
    responseLimit: '25mb',
  }
  }
}