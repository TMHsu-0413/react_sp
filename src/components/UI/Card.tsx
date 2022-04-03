import './Card.css'
function Card(props: any) {
    const classes : string = 'card ' + props.className
    return <div className={classes}>{props.children}</div>
}

export default Card