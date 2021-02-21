import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Gururaj Moger',
    email: 'guru@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bharat Moger',
    email: 'bharat@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
