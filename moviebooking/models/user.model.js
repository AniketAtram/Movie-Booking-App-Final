module.exports = mongoose => {
    const User = mongoose.model(
        "users",
        mongoose.Schema({
                userid: {
                    type: Number,
                    unique: true
                },
                email: {
                    type: String
                },
                first_name: {
                    type: String
                },
                last_name: {
                    type: String
                },
                username: {
                    type: String
                },
                contact: {
                    type: String
                },
                password: {
                    type: String
                },
                role: {
                    type: String
                },
                isLoggedIn: {
                    type: Boolean
                },
                uuid: {
                    type: String
                },
                accesstoken: {
                    type: String
                },
                coupons: [{
                    id: {
                        type: Number
                    },
                    discountValue: {
                        type: Number
                    }
                }],
                bookingRequests: [{
                    reference_number: {
                        type: Number
                    },
                    coupon_code: {
                        type: Number
                    },
                    show_id: {
                        type: Number
                    },
                    tickets: [Number]
                }]
            }

        )
    );

    return User;
};