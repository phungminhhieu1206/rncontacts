import storage from '@react-native-firebase/storage';

/**
 * 
 * file: path image muốn tải lên firebase lưu trữ
 */
const uploadImage = (file) => (onSuccess) => (onError) => {
    console.log('file image need upload --->', file);

    // Chỉ định đường dẫn (pathSave) muốn lưu trên firebase
    const pathSave = 'contact-pictures/user/777/' + file.modificationDate || file.creationDate;
    
    // Tạo tài liệu upload
    const ref = storage().ref(pathSave);

    /**
     * Tạo ra 1 task
     * Task này giống như process sẽ cho biết quá trình upload
     * file.path: là đường dẫn image local
     */
    const task = ref.putFile(file.path);

    task
        .then(async () => {
            const url = await ref.getDownloadURL();
            onSuccess(url);
        })
        .then((error) => {
            onError(error);
        });
};

export default uploadImage;