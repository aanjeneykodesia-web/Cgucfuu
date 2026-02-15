const API="https://c-production-df72.up.railway.app";
function sendRequest(role){fetch(API+"/payment-request",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({role,amount:amount.value,reason:reason.value})});alert("Request sent");}
