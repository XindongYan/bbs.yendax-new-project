new Vue({
    el:".navbar",
    data:{
        navbar: {
            margin:'0px',
            height: '50px',
            width: 'auto',
            background: '#FFFFFF',
            border: '1px solid #ccc'
        },
        header: {
            marginTop: '-35px',
            marginLeft: '5%',
            color: '#ccc',
            fontSize: '18px',
            width: '200px',
        },
        singin: {
            float: 'right',
            marginTop: '-20px',            
            marginRight: '8%',
        },
        singup: {
            float: 'right',
            marginTop: '-20px',            
            marginRight: '18%',
        },
        username: {
            float: 'right',
            marginTop: '-20px',
            marginRight: '18%',
        },
        serch: {
            marginRight: '25%'
        }
    }
})