import styles from "./not-found.module.css";
 
export default function Contact() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>お問合せ</dt>
                <dd className={styles.text}>
                    お問合せいただきありがとうございます。  
                    <br />
                    ご質問やご不明点がございましたら、下記のフォームよりお気軽にお問合せください。
                    <br />
                    下記のフォームからお問合せいただけます。
                </dd>
            </dl>
           
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">お名前</label>
                    <input type="text" id="name" name="name" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" id="email" name="email" required className={styles.input} />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">メッセージ</label>
                    <textarea id="message" name="message" required className={styles.textarea}></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>送信</button>
            </form>
        </div>
    );
}
 
 