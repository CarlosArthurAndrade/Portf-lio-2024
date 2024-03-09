"use strict";
import { NextResponse } from "next/server"
const nodemailer = require("nodemailer");
require('dotenv').config()

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASS


export async function POST(request: Request) {
    const data = await request.json()

    const transporter = nodemailer.createTransport({
        service: 'gmail.com',
        auth: {
            user: email,
            pass
        },
    })

    try {
        await transporter.sendMail({
            from: email,
            to: email,
            subject: `Mensagem de ${data.name}`,
            text: data.message + " | Sent from: " + data.email,
            html: `<div>${data.message}</div><p>Sent from: ${data.email}</p>`
        })

        return NextResponse.json({ status: 200, message: `Email enviado para ${email}` })
    } catch(err: any) {
        console.log(err)
        return NextResponse.json({ status: 400 })
    }
}