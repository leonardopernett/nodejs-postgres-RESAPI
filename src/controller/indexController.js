const {Pool} = require('pg')

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'password',
    database:'firstapi',
    port:'5432'
});

const getUser = async (req,res)=>{
    const users = await pool.query('SELECT * FROM users ORDER BY id ASC');
    res.status(200).json(users.rows);
  
}
const createUser = async (req,res)=>{
    const {name , email} = req.body
    await pool.query('INSERT INTO users(name, email) VALUES ($1,$2)',[name, email])
    res.json({
        message:'user create',
        body:{
            user:{name, email}
        }
    })
}

const getOneuser = async(req,res)=>{
    const {id}= req.params;
    const user =  await pool.query('SELECT * FROM users where id = $1',[id]);
    res.json(user.rows)
}

const deleteUser = async(req,res)=>{
    const {id}= req.params;
    await pool.query('DELETE FROM users where id = $1',[id]);
    res.json(`User ${id} deleted Successfully`);

}

const updateUser = async (req,res)=>{
    const {id}= req.params;
    const {name,email} = req.body
    await pool.query('UPDATE users SET name=$1, email=$2 WHERE id=$3',[
        name,
        email,
        id
    ]);
    res.json('user update Successfully')
}
module.exports = {
    getUser,
    createUser,
    getOneuser,
    deleteUser,
    updateUser
}