<template>
    <div>
        <nav class="mp-navigation">
            <ul class="mp-menu">
                <li class="mp-menu__item">
                    <router-link href="#" class="mp-menu__link" to="/">
                        <span class="mp-menu__title">
                            <span class="mp-menu__first-word" data-hover="홈페이지">
                                홈페이지
                            </span>
                            <span class="mp-menu__second-word" data-hover="Homepage">
                                Homepage
                            </span>
                        </span>
                    </router-link>
                </li>

                <li class="mp-menu__item">
                    <router-link href="#" class="mp-menu__link" to="/notice">
                        <span class="mp-menu__title">
                            <span class="mp-menu__first-word" data-hover="공지사항">
                                공지사항
                            </span>
                            <span class="mp-menu__second-word" data-hover="Notice">
                                Notice
                            </span>
                        </span>
                    </router-link>
                </li>

                <li class="mp-menu__item">
                    <router-link href="#" class="mp-menu__link" to="/projects">
                        <span class="mp-menu__title">
                            <span class="mp-menu__first-word" data-hover="프로젝트">
                                프로젝트
                            </span>
                            <span class="mp-menu__second-word" data-hover="Projects">
                                Projects
                            </span>
                        </span>
                    </router-link>
                </li>

                <li class="mp-menu__item">
                    <router-link href="#" class="mp-menu__link" to="/gallery">
                        <span class="mp-menu__title">
                            <span class="mp-menu__first-word" data-hover="갤러리">
                                갤러리
                            </span>
                            <span class="mp-menu__second-word" data-hover="Gallery">
                                Gallery
                            </span>
                        </span>
                    </router-link>
                </li>

                <li class="mp-menu__item">
                    <router-link href="#" class="mp-menu__link" to="/QNA">
                        <span class="mp-menu__title">
                            <span class="mp-menu__first-word" data-hover="질의">
                                질의
                            </span>
                            <span class="mp-menu__second-word" data-hover="Q&A">
                                Q&A
                            </span>
                        </span>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
import router from "../router"
export default {
    data() { 
        return { 
            links: [ 
                { 
                    id: 0,
                    text: 'Home', 
                    page: '/Home' 
                },
                { 
                    id: 1,
                    text: 'Notice', 
                    page: '/Notice' 
                },
                { 
                    id: 2,
                    text: 'Projects', 
                    page: '/Projects' 
                },
                { 
                    id: 3,
                    text: 'Gallery', 
                    page: '/Gallery' 
                },
                { 
                    id: 4,
                    text: 'QNA', 
                    page: '/QNA' 
                }
                
            ] 
        } 
    }
}
</script>

<style>
router-link {
  outline: 0;
  text-decoration: none;
}

.mp-navigation {
  width: 100%;
  border-bottom: 3px solid #ccd7d7;
  font-family: 'Spoqa Han Sans', 'Spoqa Han Sans JP', 'Sans-serif';
  font-size: 22px;
  width: 100vw;
}

.mp-menu {
  display: flex;
  justify-content: center;
  max-width: 1150px;
  margin: 0 auto;
  padding-left: 0;
}

.mp-menu__item {
  display: inline-block;
  white-space: nowrap;
}
@media screen and (max-width: 480px) {
  .mp-menu__item:nth-child(n + 3) {
    display: none;
  }
  .mp-menu__item:nth-child(2) .mp-menu__link {
    border-right: 0;
  }
}
@media screen and (max-width: 768px) {
  .mp-menu__item:nth-child(n + 4) {
    display: none;
  }
  .mp-menu__item:nth-child(3) .mp-menu__link {
    border-right: 0;
  }
}
@media screen and (max-width: 992px) {
  .mp-menu__item:nth-child(n + 5) {
    display: none;
  }
  .mp-menu__item:nth-child(4) .mp-menu__link {
    border-right: 0;
  }
}
.mp-menu__item:last-child .mp-menu__link {
  border-right: 0;
}

.mp-menu__link {
  display: block;
  padding: 6px 30px 3px;
  border-right: 2px dotted #ccd7d7;
}
.mp-menu__link:hover .mp-menu__first-word, .mp-menu__link:focus .mp-menu__first-word {
  transform: translate3d(0, -105%, 0);
}
.mp-menu__link:hover .mp-menu__second-word, .mp-menu__link:focus .mp-menu__second-word {
  transform: translate3d(0, 105%, 0);
}
@media screen and (min-width: 768px) {
  .mp-menu__link {
    padding: 6px 40px 3px;
  }
}

.mp-menu__title {
  display: inline-block;
  overflow: hidden;
}

.mp-menu__first-word,
.mp-menu__second-word {
  display: inline-block;
  position: relative;
  transition: transform .3s;
}
.mp-menu__first-word::before,
.mp-menu__second-word::before {
  position: absolute;
  content: attr(data-hover);
}

.mp-menu__first-word {
  color: #0c8040;
}
.mp-menu__first-word::before {
  top: 105%;
  color: #626262;
}

.mp-menu__second-word {
  color: #626262;
}
.mp-menu__second-word::before {
  bottom: 105%;
  color: #0c8040;
}
</style>
