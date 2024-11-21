const db = require('../../connection');

class CustomerModel {
    create(name, email, age) {
        try {
            const sql = "INSERT into customers (name, email, age) VALUE (?, ?, ?)";
            return new Promise((resolve, reject) => {
                db.query(sql, [name, email, age], (err, result) => {
                    if (err) return reject(err);
                    resolve({ id: result.insertId, name, email, age});
                });
            });
        } catch (e) {
            return reject(e.message);
        }
    }

    getAll() {
        try {
            const sql = 'Select * from customers';
            return new Promise((resolve, reject) => {
                db.query(sql, (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                })
            })
        } catch (e) {
            return reject(e.message);
        }
    }

    getById(id) {
        try {
            const sql = 'SELECT * FROM customers WHERE id = ?';
            return new Promise((resolve, reject) => {
                db.query(sql, [id], (err, result) => {
                    if (err) return reject(err);
                    resolve(result);
                })
            })
        } catch (e) {
            return reject(e.message);
        }
    }

    update(id, name, email, age) {
        try {
            const sql = "UPDATE customers SET name = ?, email = ?, age = ? WHERE id = ?";
            return new Promise((resolve, reject) => {
                db.query(sql, [name, email, age, id], (err, result) => {
                    if (err) return reject(err);
                    
                    // Check if any rows were affected (i.e., the product was updated)
                    if (result.affectedRows === 0) {
                        return reject(new Error('Customer not found or no changes made.'));
                    }
                    return resolve({ id, name, email, age });
                })
            })
        } catch (e) {
            return reject(e.message)
        }
    }

    delete(id) {
        try {
            const sql = 'DELETE FROM customers WHERE id = ?'
            return new Promise((resolve, reject) => {
                db.query(sql, [id], (err, result) => {
                    if (err) return reject(err);
                    if (result.affectedRows === 0) return reject(new Error('Customer not found. Can not delete!'));
                    return resolve({ message: 'Customer has been deleted!' });
                });
            });
        } catch (e) {
            return resolve(e.message);
        }
    }
}

module.exports = new CustomerModel();