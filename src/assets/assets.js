
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import p1 from "./p1.jpg"
import p2 from "./p2.jpg"
import p3 from "./p3.jpg"
import p4 from "./p4.jpg"
import p5 from "./p5.jpg"

export const assets = {
    chats_icon,
    verified_icon,
    info_icon,
    arrow_icon,
    // contact_img,
    // about1_img,
    // about2_img,
    menu_icon,
    cross_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo ,
}

export const quizData1 = [
    {
          id: "skinType",
  question: "How would you describe your skin type?",
  options: [
    { id: "dry", label: "Dry" },
    { id: "oily", label: "Oily" },
    { id: "combination", label: "Combination" },
    { id: "normal", label: "Normal" },
  ],
}
]
export const quizData2 = [    {
  id: "skinConcerns",
  question: "What are your top skin concerns?",
  options: [
    { id: "acne", label: "Acne & Breakouts" },
    { id: "darkSpots", label: "Dark Spots" },
    { id: "wrinkles", label: "Fine Lines & Wrinkles" },
    { id: "dullness", label: "Dullness" },
    { id: "redness", label: "Redness or Inflammation" },
  ],
},]
export const quizData3 = [{
  id: "skinSensitivity",
  question: "How sensitive is your skin?",
  options: [
    { id: "verySensitive", label: "Very Sensitive" },
    { id: "somewhatSensitive", label: "Somewhat Sensitive" },
    { id: "notSensitive", label: "Not Sensitive" },
  ],
},]
export const quizData4 = [{
  id: "routineFrequency",
  question: "How often do you use skincare products?",
  options: [
    { id: "daily", label: "Daily (AM & PM)" },
    { id: "onceDaily", label: "Once a Day" },
    { id: "occasionally", label: "Occasionally" },
    { id: "never", label: "I don’t use any skincare" },
  ],
},]
export const quizData5 = [{
  id: "productPreference",
  question: "What type of skincare products are you interested in?",
  options: [
    { id: "cleanser", label: "Cleanser" },
    { id: "moisturizer", label: "Moisturizer" },
    { id: "serum", label: "Serum" },
    { id: "sunscreen", label: "Sunscreen" },
    { id: "exfoliator", label: "Exfoliator" },
  ],
}] 



export const products = [
    {
        _id:"product1" , 
        name:"CBD Cream" ,
        image: p1  ,
        speciality:"Pain Relief" , 
        quantity:"500mg" ,
        sold:"50", 
        about: "Experience the silky touch of our ultra-hydrating Pain Relief cream, designed to nourish and restore your skin’s natural glow.It melts in effortlessly for all-day softness." ,
        fees:"500" , 
        flavours: {
            line1:"cherry" ,
            line2: 'Blueberry'
        }
    },
       {
        _id:"product2" , 
        name:"Serum" ,
        image: p2  ,
        speciality:"Nourishing" , 
        quantity:"500mg" ,
        sold:"50", 
        about: "Experience the silky touch of our ultra-hydrating Pain Relief cream, designed to nourish and restore your skin’s natural glow.It melts in effortlessly for all-day softness." ,
        fees:"500" , 
        flavours: {
            line1:"cherry" ,
            line2: 'Blueberry'
        }
    },
         {
        _id:"product3" , 
        name:"Serum" ,
        image: p3  ,
        speciality:"Peeling Solution" , 
        quantity:"500mg" ,
        sold:"50", 
        about: "Experience the silky touch of our ultra-hydrating serum, designed to nourish and restore your skin’s natural glow.It melts in effortlessly for all-day softness." ,
        fees:"500" , 
        flavours: {
            line1:"cherry" ,
            line2: 'Blueberry'
        }
    },
             {
        _id:"product4" , 
        name:"Serum Bundle" ,
        image: p4  ,
        speciality:"Peeling Solution" , 
        quantity:"1000mg" ,
        sold:"80", 
        about: "Experience the silky touch of our ultra-hydrating serum, designed to nourish and restore your skin’s natural glow.It melts in effortlessly for all-day softness." ,
        fees:"5000" , 
        flavours: {
            line1:"cherry" ,
            line2: 'Blueberry'
        }
    },
             {
        _id:"product5" , 
        name:"Whitening Cream" ,
        image: p5  ,
        speciality:"Nourishing" , 
        quantity:"500mg" ,
        sold:"50", 
        about: "Experience the silky touch of our ultra-hydrating serum, designed to nourish and restore your skin’s natural glow.It melts in effortlessly for all-day softness." ,
        fees:"500" , 
        flavours: {
            line1:"cherry" ,
            line2: 'Blueberry'
        }
    },
]