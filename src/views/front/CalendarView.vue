<template>
    <div class="d-flex flex-column my-7">
        <h2 class="text-center mb-lg-5">行事曆</h2>
        <section class="mx-auto col-lg-10 d-flex flex-column">
            <div class="col-lg-2 mb-4" style="margin: 0 auto;">
                <select name="" id="" class="form-select fs-3 text-center border-0" v-model="selectYear">
                    <option value="2023" selected>2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                </select>
            </div>
            <ul class="list-unstyled d-flex ms-auto">
                <li class="d-flex me-3">
                    <div class="bg-danger rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">緊急</span>
                </li>
                <li class="d-flex me-3">
                    <div class="bg-warning rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">優先</span>
                </li>
                <li class="d-flex">
                    <div class="bg-success rounded-circle" style="width: 20px; height: 20px;"></div>
                    <span class="ms-2">一般</span>
                </li>
            </ul>
            <div class="card">
                <div class="card-header bg-green" :style="`background-image: url('${bgImg}')`" style="background-repeat: no-repeat; background-size: cover; background-position: ;">
                    <div class="col-lg-1 d-flex align-items-center" style="margin: 0 auto;">
                        <select name="" id="" v-model="selectMonth" class="col-lg-3 form-select fs-4 text-center border-0 text-white" style="background-color: transparent;">
                            <option value="1月" selected :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >1月</option>
                            <option value="2月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >2月</option>
                            <option value="3月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >3月</option>
                            <option value="4月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >4月</option>
                            <option value="5月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >5月</option>
                            <option value="6月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >6月</option>
                            <option value="7月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >7月</option>
                            <option value="8月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >8月</option>
                            <option value="9月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >9月</option>
                            <option value="10月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >10月</option>
                            <option value="11月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >11月</option>
                            <option value="12月" :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" >12月</option>
                        </select>
                        <button type="button" class="btn border" :disabled="selectMonth === '1月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) - 1}月`"><i class="bi bi-caret-up-fill text-white"></i></button>
                        <button type="button" class="btn border ms-3" :disabled="selectMonth === '12月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) + 1}月`"><i class="bi bi-caret-down-fill text-white"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table text-center lgCalendar">
                        <thead class="h5 border-bottom border-green">
                            <tr>
                                <th width="100">日</th>
                                <th width="100">一</th>
                                <th width="100">二</th>
                                <th width="100">三</th>
                                <th width="100">四</th>
                                <th width="100">五</th>
                                <th width="100">六</th>
                            </tr>
                        </thead>
                        <tbody class="text-start">
                            <!-- 第一行 -->
                            <tr  class="">
                                <!-- 沒有的天數用空白取代 -->
                                <td v-for="day in weekdayIndex" :key="day + 400" class="bg-white" style="pointer-events:none;"></td>
                                <template v-for="(day, index) in (7 - weekdayIndex)" :key="index + 5503">
                                    <td @click="openModal(day)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`}">{{ day }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </td>
                                </template>

                            </tr>
                            <!-- 第二行 -->
                            <tr >
                                <template v-for="(day, index) in 7" :key="index + 5100">
                                    <td @click="openModal(day + 7 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`}">{{ day + 7 - weekdayIndex }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11"  class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11"  class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </td>
                                </template>

                            </tr>
                            <!-- 第三行 -->
                            <tr >
                                <template v-for="(day, index) in 7" :key="index + 5200" >
                                    <td @click="openModal(day + 14 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`}">{{ day + 14 - weekdayIndex }}
                                    <template v-for="(calendar, index) in calendars" :key="index">
                                        <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`">
                                            <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                <li class="d-flex align-items-center">
                                                    <span class="me-lg-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                    <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                    <span  v-else-if="item.message.length >= 11"  class="d-none d-lg-block"  :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                    <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                </li>
                                            </ul>
                                        </div>
                                    </template>
                                </td>
                                </template>
                            </tr>
                             <!-- 少數一個月6列 -->
                             <template v-if="(dayNum >= 30 && weekdayIndex === 6) || (dayNum === 31 && weekdayIndex === 5) && (new Date().getMonth() + 1) !== 2">
                                <tr >
                                    <template  v-for="(day, index) in 7" :key="index + 5300" >
                                        <td @click="openModal(day + 21 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`}">{{ day + 21 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                                <tr >
                                    <template  v-for="(day, index) in 7" :key="index + 5300">
                                        <td @click="openModal(day + 28 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`}">{{ day + 28 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr >
                                    <template v-for="(day, index) in (dayNum - 28 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 28 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`}">{{ day + 28 + 7 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                            </template>
                            <!-- 多數5列 -->
                            <template v-else>
                                <tr >
                                    <template v-for="(day, index) in 7" :key="index + 5300">
                                        <td :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`}" @click="openModal(day + 21 - weekdayIndex)">{{ day + 21 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr  style="max-height: 150px;">
                                    <template v-for="(day, index) in (dayNum - 21 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 21 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`}">{{ day + 21 + 7 - weekdayIndex }}
                                        <template v-for="(calendar, index) in calendars" :key="index">
                                            <div  v-if="index === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`">
                                                <ul v-for="(item, index) in calendar" :key="index + 59" class="list-unstyled">
                                                    <li class="d-flex align-items-center">
                                                        <span class="me-2 d-inline-block rounded-circle" :class="{'bg-danger': item.mark === 'danger', 'bg-warning': item.mark === 'warning', 'bg-success': item.mark === 'success'}" style="width: 10px; height: 10px;"></span>
                                                        <span v-if="item.message.length < 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message }}</span>
                                                        <span  v-else-if="item.message.length >= 11" class="d-none d-lg-block" :class="{'text-decoration-line-through': item.checked}">{{ item.message.slice(0, 10) }}...</span>
                                                        <i v-if="item.checked" class="ms-auto bi bi-check2 fs-4 d-none d-lg-block" style="cursor: pointer;"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                            </template>

                        </tbody>
                    </table>
                </div>
                <div class="card-footer py-5" :style="`background-image: url('${bgImg}')`" style="background-position: center; background-repeat: no-repeat; background-size: cover;"></div>
            </div>
        </section>

        <CalendarModal ref="calendarModal" :uid="uid" :id="calendarId" :open-modal="openModal" :date="date"></CalendarModal>
    </div>
</template>
<script>
import { onAuthStateChanged } from 'firebase/auth'
import CalendarModal from '../../components/CalendarModal.vue'
import todoStore from '../../stores/todo'
import { mapActions } from 'pinia'
import { ref, onValue } from 'firebase/database'
import { auth, db } from '../../firebase/db'
export default {
  data () {
    return {
      selectYear: '2023',
      selectMonth: `${new Date().getMonth() + 1}月`,
      februaryDay: 28,
      dayArr: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      weekdayIndex: 0,
      weekday: '',
      dayNum: '30',
      date: '',
      calendarId: '',
      uid: '',
      calendars: [],
      bgImg: ''
    }
  },
  components: {
    CalendarModal
  },
  methods: {
    ...mapActions(todoStore, ['toastMessage']),
    getCalendar () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'calendars/' + user.uid)
          onValue(dataRef, snapshot => {
            this.calendars = snapshot.val()
          })
        } else {
          this.uid = null
          this.$router.push('/login')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    openModal (date) {
      this.date = date
      this.calendarId = `${this.selectYear}/${this.selectMonth.split('月')[0]}/${date}`
      this.calendarId = this.calendarId.replace(/\//g, '-')
    },
    countFebruaryDay (year) {
      // 閏年 平年
      if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        this.dayArr[1] = 29
      } else {
        this.dayArr[1] = 28
      }
    },
    getWeekday (year, month, day) {
      const date = new Date(year, month - 1, day)
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      this.weekdayIndex = date.getDay()
      this.weekday = weekdays[this.weekdayIndex]
    },
    changeCalendarColor () {
      if (this.selectMonth === '1月') {
        this.bgImg = 'https://images.unsplash.com/photo-1477511801984-4ad318ed9846?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      } else if (this.selectMonth === '2月') {
        this.bgImg = 'https://images.unsplash.com/photo-1520690214124-2405c5217036?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      } else if (this.selectMonth === '3月') {
        this.bgImg = 'https://images.unsplash.com/photo-1518705130527-a85ab6d25e6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      } else if (this.selectMonth === '4月') {
        this.bgImg = 'https://images.unsplash.com/photo-1536147210925-5cb7a7a4f9fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
      } else if (this.selectMonth === '5月') {
        this.bgImg = 'https://images.unsplash.com/photo-1526797162-c8f09cde8b72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      } else if (this.selectMonth === '6月') {
        this.bgImg = 'https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      } else if (this.selectMonth === '7月') {
        this.bgImg = 'https://images.unsplash.com/photo-1442458017215-285b83f65851?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80'
      } else if (this.selectMonth === '8月') {
        this.bgImg = 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=704&q=80'
      } else if (this.selectMonth === '9月') {
        this.bgImg = 'https://images.unsplash.com/photo-1590247748529-91d7ca7c6fa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
      } else if (this.selectMonth === '10月') {
        this.bgImg = 'https://images.unsplash.com/photo-1559667238-551905fa2efe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1204&q=80'
      } else if (this.selectMonth === '11月') {
        this.bgImg = 'https://images.unsplash.com/photo-1626976109816-08cef8600d7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80'
      } else if (this.selectMonth === '12月') {
        this.bgImg = 'https://images.unsplash.com/photo-1471696035578-3d8c78d99684?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      }
    }
  },
  mounted () {
    this.getCalendar()
    this.dayNum = this.dayArr[this.selectMonth.split('月')[0] - 1]
    this.countFebruaryDay(this.selectYear)
    this.getWeekday(this.selectYear, new Date().getMonth() + 1, '1')
    this.changeCalendarColor()
  },
  watch: {
    selectYear () {
      this.countFebruaryDay(this.selectYear)
      this.getWeekday(this.selectYear, this.selectMonth.split('月')[0], '1')
    },
    selectMonth () {
      this.countFebruaryDay(this.selectYear)
      this.dayNum = this.dayArr[this.selectMonth.split('月')[0] - 1]
      this.getWeekday(this.selectYear, this.selectMonth.split('月')[0], '1')

      this.changeCalendarColor()
    }
  }
}
</script>
<style>
    .lgCalendar tbody tr td:hover{
        background-color: #c2e8d9;
        cursor: pointer;
    }

    .lgCalendar tbody tr td{
        color: #79827f;
    }
</style>
