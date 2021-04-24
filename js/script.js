function message1()
{
    var uzenet1 = document.getElementById("message1").value;
    if(uzenet1 == "")
    {
        alert("Kérem ne hagyja üresen az üzenet mezőt");
    }
    else alert("Az üzenetét elküldtük Medve Lászlónak. Jó csevegést kívánok");
}

function message2()
{
    var uzenet2 = document.getElementById("message2").value;
    if(uzenet2 == "")
    {
        alert("Kérem ne hagyja üresen az üzenet mezőt");
    }
    else alert("Az üzenetét elküldtük Grizzly Kálmánnak. Jó csevegést kívánok");
}