import classes from './HeaderButtons.module.css'

const HeaderButtons = props => {
    return <button className={classes.button} onClick={props.onClick}>{props.children}</button>
}
export default HeaderButtons