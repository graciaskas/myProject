//check if connection is avaible
const showConnection = document.getElementById('connection')
const showConnection_  =document.getElementById('connection_')
const showConnection_okay  =document.getElementById('connection_okay')
if(navigator.onLine){
    showConnection.style.display = "none"
    showConnection_.style.display = "none"
    hideconnection()
}else{
    showConnection.style.display = "block"
    showConnection_.style.display="block"
}

//404 page
const button = document.querySelector('#home')
      button.addEventListener('click',()=>{
          setTimeout(()=>{
                window.location.href = "http://127.0.0.1:90/web"
          },400)
        
      })

    //dashboard render page
    function renderpage(page){
        const pagetorender = page
        setTimeout(()=>{
            window.location.href= "http://127.0.0.1:90/web/"+pagetorender 
        },700)
    }

    //dashboad show info
    function showInfo(item){
        const item_ = document.getElementById(item)
        return item_.style.display="block"
    }

    //event for hiding Elemets
    function hideElement(el){
            const el_ = document.getElementById(el)
            if(el != null || el != "undefinde"){
                return el_.style.display="none"
            }else{
                alert("Undefined"+el)
            }
        }
    
        window.addEventListener('click',(a)=>{
            alert(a)
        })

    //autorefresh page
    function refreshpage(time){
        setTimeout(()=>{
           location.reload(true)
        },time)
    }

    //function display element
    function arrayList(array){
        for(let i= 0; i<array.length;i++){
            return arrayList[i]
        }
    }
    //hide connection
    function hideconnection(){
        setTimeout(()=>{
            showConnection_okay.style.display= "none"
        },5000)
    }

    // //form submition eventlistener
    // const form = document.getElementById('form')
    // const first = document.getElementById('first')
    // const last = document.getElementById('last')
    // const nationality = document.getElementById('nationality')
    // const address = document.getElementById('address')
    // const state = document.getElementById('state')
    // const forbiden = ['#','@','!','(',')','*','&','^','%','$']
    // form.addEventListener('submit',(e)=>{
    //     e.preventDefault()
    //         //check for empty fields
    //         if(first.Value.includes(arrayList(forbiden))){
    //             alert('Special Character must not include in the name')
    //         }else{
    //             alert(arrayList(forbiden))
    //         }
    // })

    //printer
    function printer(el) {
        var print = document.getElementById(el).innerHTML;    
        var body = document.body.innerHTML;      
        document.body.innerHTML = print;     
            window.print();     
        document.body.innerHTML = body
    }