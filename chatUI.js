
// import moment from './node_modules/moment/src/moment';
let data = [
    {
      message: "Hi user",
      createdAt: "2021-09-14T13:23:02.2982",
      sender: "agent",
      _id: 1,
    },
    {
      message: "How are you doing today",
      createdAt: "2021-09-14T13:23:02.2982",
      sender: "user",
      _id: 2,
    },
    {
      message: "I am good, how about you",
      createdAt: "2021-09-14T13:23:02.2982",
      sender: "agent",
      _id: 3,
    },
    {
      message: "I am good, thanks for asking",
      createdAt: "2021-09-14T13:23:02.2982",
      sender: "user",
      _id: 4,
    },
    {
      message: "How can I help you today?",
      createdAt: "2021-09-14T13:23:02.2982",
      sender: "agent",
      _id: 5,
    },
  ];
  console.log("its working")

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;
    if (interval === 1) {
        return Math.floor(interval) + " year ago";
    }

    if (interval > 1) {
        return Math.floor(interval) + " years ago";
    }

    interval = seconds / 2592000;

    if (interval === 1) {
        return Math.floor(interval) + " month ago";
    }

    if (interval > 1) {
        return Math.floor(interval) + " months ago";
    }

    interval = seconds / 86400;
    if (interval === 1) {
        return Math.floor(interval) + " day ago";
    }

    if (interval > 1) {
        return Math.floor(interval) + " days ago";
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
}


for(var i=0; i<data.length;i++){
    console.log("insed")
    if (data[i]["sender"]=="agent"){
        // console.log("inside if")

        var msg_container1=document.createElement("div")
        msg_container1.classList.add("left_msg")

        var msg1=document.createElement("div")
        msg1.classList.add("msg1_id")
        msg1.innerHTML=data[i]["message"]
        
        
        
        var x = document.createElement("IMG");
        x.classList.add("image_l")
        x.setAttribute("src", "image.jpg");
        
        msg_container1.appendChild(x)
        msg_container1.appendChild(msg1)

        var msg_date1=data[i].createdAt
        

        var time_ago1= document.createElement("p")
        time_ago1.classList.add("timer1")
        time_ago1.innerHTML=timeSince(msg_date1)
        // msg_container2.appendChild(time_ago2)



        document.getElementById("main").appendChild(msg_container1)
        document.getElementById("main").appendChild(time_ago1)


    }

    else {

        var msg_container2=document.createElement("div")
        msg_container2.classList.add("right_msg")

        var msg2=document.createElement("div")
        msg2.classList.add("msg2_id")
        msg2.innerHTML=data[i]["message"]
        
        msg_container2.appendChild(msg2)


        var x1 = document.createElement("IMG");
        x1.classList.add("image_ri")
        x1.setAttribute("src", "image.jpg");

        msg_container2.appendChild(x1)

        var msg_date2=data[i].createdAt
        

        var time_ago2 = document.createElement("p")
        time_ago2.classList.add("timer2")
        time_ago2.innerHTML=timeSince(msg_date2)
        // msg_container2.appendChild(time_ago2)



        document.getElementById("main").appendChild(msg_container2)
        document.getElementById("main").appendChild(time_ago2)





    }


}


function text_data(){
    var typed_text=document.getElementById("input_text").value
    if (typed_text != ""){

        var new_msg=document.createElement("div")
        new_msg.classList.add("right_msg")
        new_msg.innerHTML=typed_text
        var x2 = document.createElement("IMG");
        x2.classList.add("image_typed")
        x2.setAttribute("src", "image.jpg");
        new_msg.appendChild(x2)
        document.getElementById("main").appendChild(new_msg)
    
        dict={message:typed_text,creaatedAt:new Date().toISOString(),sender:"agent",id:data.length+1}
        data=data.concat(dict)
        document.getElementById("input_text").value=""
    }



}

// function get_time(){
//     return timeSince(dd)
// }

// // setInterval(timeSince(dd) => {console.log("any")

// // }, 3000);
// var aws=setInterval(get_time,5000);
// console.log(aws,"ye")