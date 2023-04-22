import db from "../config/firebase";
import {
  collection,
  addDoc,
  Timestamp,
  getDocs,
  query,
  orderBy,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

export const createBlogPost = async (blogData, onSuccess, onError) => {
  try {
    await addDoc(collection(db, "blog-posts"), {
      title: blogData.title,
      content: blogData.content,
      imageUrl: blogData.imageUrl,
      created: Timestamp.now(),
    });
    onSuccess();
  } catch (err) {
    onError(err);
  }
};

export const getBlogPosts = async (onSuccess, onError) => {
  try {
    const queryData = query(
      collection(db, "blog-posts"),
      orderBy("created", "desc")
    );

    const querySnapshot = await getDocs(queryData);
    const blogList = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      blogList.push({ ...doc.data(), id: doc.id });
    });
    onSuccess();
    return blogList;
  } catch (err) {
    onError(err);
  }
};

export const getSingleBlogPost = async (blogId, onSuccess, onError) => {
  try {
    const docRef = doc(db, "blog-posts", blogId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      onSuccess();
      return docSnap.data();
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      throw new Error({ message: 'blog post not found' })
    }
  } catch (err) {
    onError(err);
  }
};

export const updateBlogPost = async (updatedBlogData, onSuccess, onError) => {
  const blogDocRef = doc(db, "blog-posts", updatedBlogData.id);
  try {
    await updateDoc(blogDocRef, updatedBlogData);
    onSuccess();
  } catch (err) {
    onError(err);
  }
};
