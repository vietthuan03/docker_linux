const { MongoClient } = require('mongodb');

// Thay đổi chuỗi kết nối dựa trên thông tin cơ sở dữ liệu của bạn
const uri = 'mongodb+srv://thuantv:I9MyVyBacRUTWmfs@cluster0.i4ihisz.mongodb.net/db01\n' +
    'retryWrites=true&w=majority';

async function connectDB() {
    try {
        // Kết nối đến cơ sở dữ liệu
        const client = new MongoClient(uri, { useUnifiedTopology: true });
        await client.connect();

        console.log('Đã kết nối đến MongoDB');

    } catch (error) {
        console.error('Lỗi kết nối đến MongoDB:', error);
    }
}

// Gọi hàm để kết nối đến MongoDB
connectDB();
// export default connectDB;