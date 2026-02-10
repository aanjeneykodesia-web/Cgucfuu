const API="https://supply-chain-backend-production-36ed.up.railway.app";
payBtn.onclick=async()=>{const res=await fetch(API+"/create-order",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({amount:amount.value})});
const order=await res.json();new Razorpay({key:"RAZORPAY_KEY_ID",order_id:order.id,amount:order.amount,currency:"INR"}).open();}