import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [visible, setVisible] = useState(false)

  // Это обеспечит, что анимация будет работать при прокрутке страницы
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true)
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div className="container">
      <div className="header">
        <h1 className={visible ? 'fade-in' : ''}>
          <img src="https://raw.githubusercontent.com/Anowon/reactproject1/refs/heads/main/src/assets/Myphoto.jpg" alt="Андрей Иванов" className="profile-img" />
          Андрей Иванов
        </h1>
        <p className={visible ? 'fade-in' : ''}>DevOps инженер</p>
        <div className="contact-links">
        <a href="https://t.me/Anowo_N" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg> Anowo_N</a>
        <a href="mailto:Anowon@mail.ru" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}><svg width="1.5rem" height="1.5rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >

<path d="M0 0h48v48H0z" fill="none"/>
<g id="Shopicon">
	<path d="M24,44c5.343,0,10.365-2.08,14.143-5.858l-2.829-2.828C32.292,38.336,28.274,40,24,40c-8.822,0-16-7.178-16-16
		S15.178,8,24,8s16,7.178,16,16c0,2.206-1.794,4-4,4s-4-1.794-4-4v-8h-4v1.079C26.822,16.397,25.459,16,24,16c-4.418,0-8,3.582-8,8
		s3.582,8,8,8c2.394,0,4.536-1.057,6.003-2.723C31.47,30.942,33.611,32,36,32c4.411,0,8-3.589,8-8c0-11.028-8.972-20-20-20
		S4,12.972,4,24S12.972,44,24,44z M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z"/>
</g>
</svg> Anowon@mail.ru </a>
        </div>
      </div>

      <section className={visible ? 'fade-in' : ''}>
        <h2>О себе</h2>
        <p>Меня зовут Андрей Иванов, родился 26 марта 1996 года. Я - DevOps инженер, с опытом работы в ИТ-сфере с 2018 года. Моя цель — автоматизация процессов, построение масштабируемых инфраструктур и внедрение современных DevOps практик.</p>
      </section>

      <section className={visible ? 'fade-in' : ''}>
        <h2>Опыт работы</h2>
        
            <h3>Старший инженер центра защиты информации</h3>
            <p>Управление МВД России по Калининградской области — 2018 - 2024</p>
            <ul>
              <li>Разработка и поддержка ИТ-инфраструктуры, включая физическое построение сетевых топологий.</li>
              <li>Организация и поддержание межведомственного взаимодействия между территориальными органами.</li>
              <li>Автоматизация развертывания с использованием CI/CD процессов, контейнеризации и оркестрации контейнеров.</li>
            </ul>
            <h3>QA Engineer</h3>
            <p>АО "НППКТ" — Ноябрь 2024 - настоящее время</p>
            <ul>
              <li>Тестирование операционной системы на базе ядра Linux.</li>
              <li>Ведение технической документации, отчетности и задач.</li>
              <li>Оформление баг репортов.</li>
              <li>Составление тест кейсов и планов тестирования.</li>
              <li>Регрессионное и функциональное тестирование продукта.</li>
            </ul>
          
      </section>

      <section className={visible ? 'fade-in' : ''}>
        <h2>Навыки</h2>
        <ul>
          <li>Операционные системы: Linux, Windows (уровень администратора).</li>
          <li>CI/CD: Процесс Blue/Green deployment.</li>
          <li>Контейнеризация: Docker (создание и управление контейнерами, Docker Compose).</li>
          <li>Оркестрация контейнеров: Kubernetes (базовое развертывание и управление кластерами).</li>
          <li>Автоматизация инфраструктуры: Terraform (на уровне начинающего).</li>
          <li>Системы контроля версий: Git (GitHub), включая CI/CD pipelines.</li>
          <li>Мониторинг и логирование: Prometheus, Grafana (базовые знания).</li>
          <li>Облачные платформы: Яндекс Cloud (базовые навыки работы с облачными сервисами).</li>
          <li>Скриптинг: Bash (автоматизация рутинных задач).</li>
        </ul>
      </section>

      <section className={visible ? 'fade-in' : ''}>
        <h2>Образование</h2>
        <ul>
          <li>
            <p>Среднее - профессиональное, ЗФ РАНХиГС при Президенте РФ по специальности "Юрист"</p>
          </li>
        </ul>
      </section>

      <section className={visible ? 'fade-in' : ''}>
        <h2>Контакты</h2>
        <a href="https://t.me/Anowo_N" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}><svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="1.5rem" height="1.5rem" viewBox="0 0 24 24"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg> Anowo_N</a>
        <a href="mailto:Anowon@mail.ru" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}><svg width="1.5rem" height="1.5rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >

<path d="M0 0h48v48H0z" fill="none"/>
<g id="Shopicon">
	<path d="M24,44c5.343,0,10.365-2.08,14.143-5.858l-2.829-2.828C32.292,38.336,28.274,40,24,40c-8.822,0-16-7.178-16-16
		S15.178,8,24,8s16,7.178,16,16c0,2.206-1.794,4-4,4s-4-1.794-4-4v-8h-4v1.079C26.822,16.397,25.459,16,24,16c-4.418,0-8,3.582-8,8
		s3.582,8,8,8c2.394,0,4.536-1.057,6.003-2.723C31.47,30.942,33.611,32,36,32c4.411,0,8-3.589,8-8c0-11.028-8.972-20-20-20
		S4,12.972,4,24S12.972,44,24,44z M24,28c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S26.206,28,24,28z"/>
</g>
</svg> Anowon@mail.ru </a>
      </section>

      <footer className={visible ? 'fade-in' : ''}>
        <p>Доступен для новых проектов и возможностей!</p>
      </footer>
    </div>
  )
}

export default App
