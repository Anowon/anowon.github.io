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
        <h1 className={visible ? 'fade-in' : ''}>Андрей Иванов</h1>
        <p className={visible ? 'fade-in' : ''}>Начинающий DevOps инженер</p>
        <div className="contact-links">
          <a href="https://t.me/Anowo_N" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}>Telegram: Anowo_N</a>
          <a href="mailto:Anowon@mail.ru" target="_blank" rel="noopener noreferrer" className={visible ? 'fade-in' : ''}>Email</a>
        </div>
      </div>

      <section className={visible ? 'fade-in' : ''}>
        <h2>О себе</h2>
        <p>Меня зовут Андрей Иванов, родился 26 марта 1996 года. Я - начинающий DevOps инженер, с опытом работы в ИТ-сфере с 2018 года. Моя цель — автоматизация процессов, построение масштабируемых инфраструктур и внедрение современных DevOps практик.</p>
      </section>

      <section className={visible ? 'fade-in' : ''}>
        <h2>Опыт работы</h2>
        <ul>
          <li>
            <h3>Старший инженер центра информационных технологий связи и защиты информации</h3>
            <p>Управление МВД России по Калининградской области — 2018 - 2024</p>
            <ul>
              <li>Разработка и поддержка ИТ-инфраструктуры, включая физическое построение сетевых топологий.</li>
              <li>Организация и поддержание межведомственного взаимодействия между территориальными органами.</li>
              <li>Погружение в автоматизацию развертывания с использованием CI/CD процессов, контейнеризации и оркестрации контейнеров.</li>
            </ul>
          </li>
          <li>
            <h3>Инженер-тестировщик</h3>
            <p>АО "НППКТ" — Ноябрь 2024 - настоящее время</p>
            <ul>
              <li>Тестирование операционной системы на базе ядра Linux.</li>
              <li>Ведение технической документации, отчетности и задач в Redmine.</li>
            </ul>
          </li>
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

      <footer className={visible ? 'fade-in' : ''}>
        <p>Доступен для новых проектов и возможностей!</p>
      </footer>
    </div>
  )
}

export default App
