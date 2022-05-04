import { makeStyles } from "@material-ui/core/styles"

export default makeStyles((theme) => ({
    
    title: {
        color: 'gray'
    },
    leading: {
        color: '#8193AE',
        fontSize: '1.2rem',
        marginTop: '-1rem'
    },
    listItem: {
        margin: '2rem',
        lineSpacing: '0.25rem',
        textAlign: 'center',
        fontSize: '1rem' 
    },
    container: {
        '@media  (max-width: 802px)': {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        '@media  (max-width: 448px)': {
            display: 'grid',
            gridTemplateColumns: '1fr',
        }
    }
}))