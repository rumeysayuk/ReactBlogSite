import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css"

ReactDOM.render(<App/>, document.getElementById('root'));


//debounce  Geri dönme, zaman alan bir görevin çok sık başlamamasını sağlamak
// için kullanılan bir programlama uygulamasıdır. Başka bir deyişle, işlevlerin çağrıldığı oranları sınırlar.

// lazy-suspense içine fallback alıyo yüklenme gecikirse yükleniyo yazısı gösterebiliriz..--

//usememo önbelleğe alıyo ve sık yüklemeyi engelliyor. useeffecktten farkı deps beklemez

//usecallback bir işlevin yeniden oluşturulmasını engellememizi sağlar.

// use reducer useState gibi.içine state ve action alır actiona gelen işleme göre farklı işler yapar.--

//use context içindeki route olan componentlere prop olarak value sini gönderiyor.--
