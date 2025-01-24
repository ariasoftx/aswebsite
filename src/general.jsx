
export function Pager({page,children}){
    for (let i = 0; i < children.length; i++) {
        let id = children[i].props.id;
        if(page == id){
            return children[i]
        }
    }
    return <div className="body"><h1>not found</h1></div>
}
export function Page({children}){
    document.querySelector(":root").style.setProperty("--bg","#212529")
    document.querySelector(":root").style.setProperty("--fg","white")
    return children
}
export function Navitem({click,children}){
    return <a href="#" onClick={(e)=>{e.preventDefault();click()}}>{children}</a>
}
export function RightNav({children}){
    return <div className="rnav">{children}</div>
}
export function Nav({children}){
    return (
        <nav>
            <span className="logo">ariasoft</span>
            {children}
        </nav>
    )
}