import { makeStyles } from "@material-ui/core/styles"
export default makeStyles((theme) => ({
    container: {
        width: '80%',
        background: '#F6F9FF',
        margin: 'auto',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '@media (max-width: 448px)': {
            display: 'grid',
            gridTemplateColumns: '1fr',
        },
        '@media (max-width:802px)':{
            display: 'flex',
            flexDirection: 'column'
        }
    },
}))