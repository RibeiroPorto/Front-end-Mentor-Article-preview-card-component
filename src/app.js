document.addEventListener('DOMContentLoaded', ()=>{
    const shareButton = document.querySelector('#share')
    const sharingPopUp = document.querySelector('#sharing-popup')
    
    shareButton.addEventListener("click", (e)=>{
        
        sharingPopUp.classList.toggle('hide')
        shareButton.classList.toggle('mobile')
        e.stopPropagation()
    })
    sharingPopUp.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
    document.addEventListener('click',(e) =>{
        console.log(e.target)
        sharingPopUp.classList.add('hide')
        shareButton.classList.remove('mobile')
    })
})