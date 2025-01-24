import "../css/home.css"
function NHeader({href,title,children}){
    return (
        <>
            <h3 className="nheader"><a href={href || href=="" ? href : "#"}>{title}</a></h3>
            <p>{children}</p>
        </>
    )
}
export function Home() {
    return (
        <>
            <div className="banner">
                <div className="central">
                    <div className="btext">welcome to ariasoft!</div>
                    <span>Sponsored by JcJenson</span>
                </div>
            </div>
            <div className="grad"></div>
            <div className="bodypad">
                <NHeader href="#" title="taliban news international">two idiots went fishing in a dry pond and catched nothing!!! LOL</NHeader>
                <NHeader href="/p/VOA/" title="Voice of Afghanistan (VOA)">a migrant rejected chips from teacher</NHeader>
                <NHeader href="/p/validi.html" title="validi's islamic bullshit">a fucking idiot by the of khalid will try to make nasa islamic and 6x7=48</NHeader>
                <NHeader href="/p/jamal.html" title="Jamalism">the good words of jamal and jamalism<br/><i>no ex no next for me jamal is the best</i></NHeader>
                <NHeader href="#" title="Karl Marx (Worker Afshin)">we shall rename naisar to binandehgrad and spread his bullshit ideology</NHeader>
                <NHeader href="/p/nasa/" title="Validi’s Islamic Nasa">Nasa is now Islamic...</NHeader>
                <NHeader href="/p/yadegankar" title="YadeGanKar 1">yade goes to mars</NHeader>
            </div>
        </>
    )
}