module.exports = {
    createTransaction: async (req, res) => {
        try {
            const {amount, description} = req.body;
            if (amount <= 0) {
                throw new Error('The transaction amount must be greater than 0');
            }
            if (!description) {
                throw new Error('The transaction requires a descriptions to be processed');
            }
            const newTransaction = await Transaction.create({
                amount: amount,
                description: description,
            });
            res.send(newTransaction);
            return;
        } catch (err) {
            console.log(err);
        }
    }
}