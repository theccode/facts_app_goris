import { makeStyles } from "@material-ui/core/styles"
export default makeStyles((theme) => ({
    title: {
        textAlign: 'left',

        fontWeight: 'bold',
        fontFamily: '\'Sora\', sans-serif',
        color: '#000'
    },
    title_facts: {
        color: '#8193AE',
        marginRight: '1rem',
        fontSize: '1.8rem',
        lineHeight: '2.4rem'
    },
    span: {
        color: '#265AA9',
    },
    facts: {
        display:'flex',
        justifyContent: 'center',
        fontWeight: 'bolder'
    }
}))