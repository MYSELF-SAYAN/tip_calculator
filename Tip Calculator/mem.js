const Tipcal=()=>{
    let total=document.getElementById('total').value
    alert(total)
    let percent=document.getElementById('percent').value
    let people=document.getElementById('people').value
    let ans=(total*percent)/(people*100)
    document.getElementById('k').value=ans

}