
export default function NotificationItem({type, value, html}) {
    return(
        <>
            <li data-notification-type= {type}>
                
                {value && <p>{value}</p>}
                {html && <div dangerouslySetInnerHTML={{__html:html}}></div>}
                </li>
        </>
    )
}