<template>
    <div data-aos="fade-up" data-aos-duration="1000" class="container d-flex flex-column my-7" style="overflow-x: hidden;">
        <h2 class="text-center mb-3">記帳</h2>
        <ul class="list-unstyled mb-5 fs-5 d-lg-flex" style="margin: 0 auto;">
            <li class="me-5 mb-3">
                <a href="#" class="text-decoration-none link-green" @click.prevent="pageStatus = '收支紀錄'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>收支紀錄</span>
                </a>
            </li>
            <li class="me-5 mb-3">
                <a href="#" class="text-decoration-none link-green" @click.prevent="pageStatus = '每月費用、收益總計'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>每月費用、收益總計</span>
                </a>
            </li>
            <li>
                <a href="#" class="text-decoration-none link-green" @click.prevent="pageStatus = '每年費用、收益總計'">
                    <i class="bi bi-caret-right-fill"></i>
                    <span>每年費用、收益總計</span>
                </a>
            </li>
        </ul>
        <div v-if="pageStatus === '收支紀錄'" class="row row-cols-lg-2 gx-5">
            <section class=" col">
            <div class="mb-4" style="margin: 0 auto;">
                <select name="" id="" class="form-select fs-3 text-center border-0" v-model="selectYear" style="width: 150px; margin: 0 auto;">
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
            <div class="card">
                <div class="card-header bg-green"  :style="`background-image: url('${bgImg}')`">
                    <div class="col-lg-2 d-flex align-items-center" style="margin: 0 auto;">
                        <select name="" id="" v-model="selectMonth" class="col-lg-3 form-select fs-4 text-center border-0 text-white" style="appearance: none; background: url('') no-repeat right center; background-color: transparent;">
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="1月" selected>1月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="2月">2月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="3月">3月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="4月">4月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="5月">5月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="6月">6月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="7月">7月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="8月">8月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="9月">9月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="10月">10月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="11月">11月</option>
                            <option :class="{'bg-purple': selectMonth === '1月', 'bg-blue': selectMonth === '2月', 'bg-pink': selectMonth === '3月', 'bg-green-4': selectMonth === '4月', 'bg-green-5': selectMonth === '5月', 'bg-yellow': selectMonth === '6月', 'bg-orange': selectMonth === '7月', 'bg-red': selectMonth === '8月', 'bg-darkRed': selectMonth === '9月', 'bg-darkOrange': selectMonth === '10月', 'bg-brown': selectMonth === '11月', 'bg-darkBlue': selectMonth === '12月'}" style="appearance: none; background: url('') no-repeat right center;" value="12月">12月</option>
                        </select>
                        <button type="button" class="btn border" :disabled="selectMonth === '1月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) - 1}月`"><i class="bi bi-caret-up-fill text-white"></i></button>
                        <button type="button" class="btn border ms-3" :disabled="selectMonth === '12月'" @click="selectMonth = `${Number(selectMonth.split('月')[0]) + 1}月`"><i class="bi bi-caret-down-fill text-white"></i></button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table text-center align-middle calendar">
                        <thead class="h5 border-bottom border-green">
                            <tr>
                                <th >日</th>
                                <th >一</th>
                                <th >二</th>
                                <th >三</th>
                                <th >四</th>
                                <th >五</th>
                                <th >六</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <!-- 第一行 -->
                            <tr height="50" class="">
                                <!-- 沒有的天數用空白取代 -->
                                <td v-for="day in weekdayIndex" :key="day + 400" class="bg-white" style="pointer-events:none;"></td>
                                <template v-for="(day, index) in (7 - weekdayIndex)" :key="index + 5503">
                                    <td @click="openModal(day)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day}`, 'bg-lightBlue': date === day}">{{ day }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day}`" class="bi bi-dot d-block"></i>
                                        </template>
                                </td>
                                </template>

                            </tr>
                            <!-- 第二行 -->
                            <tr height="50">
                                <template v-for="(day, index) in 7" :key="index + 5100">
                                    <td @click="openModal(day + 7 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 7 - weekdayIndex}">{{ day + 7 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 7 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                </td>
                                </template>

                            </tr>
                            <!-- 第三行 -->
                            <tr height="50">
                                <template v-for="(day, index) in 7" :key="index + 5200" >
                                    <td @click="openModal(day + 14 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 14 - weekdayIndex}">{{ day + 14 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 14 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                </td>
                                </template>
                            </tr>
                             <!-- 少數一個月6列 -->
                             <template v-if="(dayNum >= 30 && weekdayIndex === 6) || (dayNum === 31 && weekdayIndex === 5) && (new Date().getMonth() + 1) !== 2">
                                <tr height="50">
                                    <template  v-for="(day, index) in 7" :key="index + 5300" >
                                        <td @click="openModal(day + 21 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 21 - weekdayIndex}">{{ day + 21 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                                <tr height="50">
                                    <template  v-for="(day, index) in 7" :key="index + 5300">
                                        <td @click="openModal(day + 28 - weekdayIndex)" :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 28 - weekdayIndex}">{{ day + 28 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr height="50">
                                    <template v-for="(day, index) in (dayNum - 28 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 28 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 28 + 7 - weekdayIndex}">{{ day + 28 + 7 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 28 + 7 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                    </td>
                                    </template>

                                </tr>
                            </template>
                            <!-- 多數5列 -->
                            <template v-else>
                                <tr height="50">
                                    <template v-for="(day, index) in 7" :key="index + 5300">
                                        <td :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 21 - weekdayIndex}" @click="openModal(day + 21 - weekdayIndex)">{{ day + 21 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                                <tr height="50" style="max-height: 150px;">
                                    <template v-for="(day, index) in (dayNum - 21 -( 7 - weekdayIndex))" :key="index + 5400">
                                        <td @click="openModal(day + 21 + 7 - weekdayIndex)"  :class="{'border': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-green': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'border-3': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'bg-lightGreen': new Date().toLocaleDateString().replace(/\//g, '-') === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`, 'bg-lightBlue': date ===  day + 21 + 7 - weekdayIndex}">{{ day + 21 + 7 - weekdayIndex }}
                                        <template v-for="record in recordedListDate" :key="record">
                                            <i v-if="record === `${selectYear}-${selectMonth.split('月')[0]}-${day + 21 + 7 - weekdayIndex}`" class="bi bi-dot d-block"></i>
                                        </template>
                                    </td>
                                    </template>
                                </tr>
                            </template>

                        </tbody>
                    </table>
                </div>
            </div>
            </section>
            <section class="col mt-lg-3">
                <h4 class="mb-4 mt-lg-0 mt-4">開始紀錄收支吧！</h4>
                <label for="expense" class="form-label">支出</label>
                <div class="input-group mb-3">
                    <select name="" id="" class="form-select" v-model="categoryE">
                        <option value="飲食">飲食</option>
                        <option value="日用品">日用品</option>
                        <option value="住宿">住宿</option>
                        <option value="交通">交通</option>
                        <option value="娛樂">娛樂</option>
                        <option value="衣飾">衣飾</option>
                        <option value="其他">其他</option>
                    </select>
                    <input type="text" class="form-control" placeholder="支出名稱" v-model="titleE">

                    <input type="number" class="form-control" placeholder="金額" v-model.number="moneyE" @keydown="handleKeyDown($event)"  @keyup.enter="record('expense')">

                    <button @click="record('expense')" type="button" class="btn btn-outline-danger  "><i class="bi bi-plus-lg"></i></button>
                </div>
                <label for="income" class="form-label">收入</label>
                <div class="input-group mb-4">
                    <select name="" id="" class="form-select" v-model="categoryR">
                        <option value="月薪" selected>月薪</option>
                        <option value="其他">其他</option>
                    </select>
                    <input type="text" class="form-control" placeholder="收入名稱" v-model="titleR">
                    <input type="number" class="form-control" placeholder="金額" @keydown="handleKeyDown($event)" @keyup.enter="record('revenue')" v-model.number="moneyR">
                    <button type="button" class="btn btn-outline-green" @click="record('revenue')"><i class="bi bi-plus-lg"></i></button>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h4>{{ accountId }}</h4>
                    </div>
                    <div class="card-body">
                        <ul v-if="accountList.length" class="list-unstyled mb-0">
                            <li v-for="(account, index) in accountList" :key="index + 1990" class="d-flex align-items-center mb-2" :class="{'text-success': account.revenueOrExpense === 'revenue'}">
                                <template v-if="account.revenueOrExpense === 'expense'">
                                    <span class="me-2">-</span>
                                    <span class="d-flex align-items-center">
                                        <img v-if="account.categoryE === '飲食'" src="../../assets/images/hamburger.png" width="25" height="25" alt="" class="me-2">
                                        <img v-if="account.categoryE === '日用品'" src="../../assets/images/shampoo.png" width="25" height="25" alt="" class="me-2">
                                        <img v-if="account.categoryE === '住宿'" src="../../assets/images/house.png" width="25" height="25" alt="" class="me-2">
                                        <img v-if="account.categoryE === '交通'" src="../../assets/images/motorcycle.png" width="25" height="25" alt="" class="me-2">
                                        <img v-if="account.categoryE === '娛樂'" src="../../assets/images/game-controller.png" width="25" height="25" alt="" class="me-2">
                                        <img v-if="account.categoryE === '衣飾'" src="../../assets/images/dress.png" width="25" height="25" alt="" class="me-2">
                                        <i v-if="account.categoryE === '其他'" class="bi bi-three-dots me-2 fs-4"></i>
                                        {{ account.categoryE }} - {{ account.titleE }}
                                    </span> <span>NT$ {{ numberComma(account.moneyE) }}</span>
                                </template>
                                <template v-else-if="account.revenueOrExpense === 'revenue'">
                                    <span class="me-2">+</span>
                                    <span class="d-flex align-items-center">
                                        <img v-if="account.categoryR === '月薪'" src="../../assets/images/salary.png" width="25" height="25" alt="" class="me-2">
                                        <i v-if="account.categoryR === '其他'" class="bi bi-three-dots me-2 fs-4"></i>

                                        {{ account.categoryR }} - {{ account.titleR }}</span>   <span>NT$ {{ numberComma(account.moneyR) }}</span>
                                        <i v-if="account.categoryR === '其他'" class="bi bi-three-dots me-2 fs-4"></i>
                                </template>
                                <button type="button" @click="openDeleteModal(this.accountId, index)" class="ms-auto btn border-0"><i class="bi bi-x-lg"></i></button>
                            </li>
                        </ul>
                        <p v-else-if="!accountList.length" class="mb-0">無紀錄</p>
                    </div>
                    <div v-if="totalRevenue || totalExpense" class="card-footer">
                        <p v-if="totalRevenue" class="mb-0 text-end text-success fw-bold">總收入 NT${{ numberComma(totalRevenue) }}</p>
                        <p v-if="totalExpense" class="mb-0 text-end text-danger fw-bold">總支出 - NT${{ numberComma(totalExpense) }}</p>
                    </div>
                </div>
            </section>
        </div>

        <div class="" :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每年費用、收益總計'}">
            <div class="d-flex align-items-center justify-content-center mb-5">
                <select name="" id="" class=" form-select fs-3 text-center border-0 me-lg-3" style="width: 150px;" v-model="monthlySelectYear">
                    <option value="2023" selected>2023 年</option>
                    <option value="2024">2024 年</option>
                    <option value="2025">2025 年</option>
                    <option value="2026">2026 年</option>
                    <option value="2027">2027 年</option>
                    <option value="2028">2028 年</option>
                    <option value="2029">2029 年</option>
                    <option value="2030">2030 年</option>
                    <option value="2031">2031 年</option>
                    <option value="2032">2032 年</option>
                    <option value="2033">2033 年</option>
                    <option value="2034">2034 年</option>
                    <option value="2035">2035 年</option>
                    <option value="2036">2036 年</option>
                </select>
                <select name="" id=""  class=" form-select border-0 fs-3" style="width: 120px" v-model="monthlySelectMonth">
                    <option value="1" selected>1 月</option>
                    <option value="2">2 月</option>
                    <option value="3">3 月</option>
                    <option value="4">4 月</option>
                    <option value="5">5 月</option>
                    <option value="6">6 月</option>
                    <option value="7">7 月</option>
                    <option value="8">8 月</option>
                    <option value="9">9 月</option>
                    <option value="10">10 月</option>
                    <option value="11">11 月</option>
                    <option value="12">12 月</option>
                </select>
                <div class="d-flex">
                  <button type="button" class="btn border" :disabled="monthlySelectMonth === 1" @click="monthlySelectMonth = monthlySelectMonth - 1"><i class="bi bi-caret-up-fill text-green"></i></button>
                  <button type="button" class="btn border ms-3" :disabled="monthlySelectMonth === 12" @click="monthlySelectMonth = monthlySelectMonth + 1"><i class="bi bi-caret-down-fill text-green"></i></button>
                </div>
            </div>

            <div class="row row-cols-lg-2 gy-5">
                <div class="col d-flex flex-column align-items-center">
                    <h5 class="text-center">費用</h5>
                    <h5 v-if="!monthlyExpense" class="text-center mt-7">無資料</h5>

                    <div id="chart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(expense, index) in monthlyExpenseData" :key="index">
                        <img v-if="expense[0] === '飲食'" src="../../assets/images/hamburger.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '日用品'" src="../../assets/images/shampoo.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '住宿'" src="../../assets/images/house.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '交通'" src="../../assets/images/motorcycle.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '娛樂'" src="../../assets/images/game-controller.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '衣飾'" src="../../assets/images/dress.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="expense[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ expense[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(expense[1] )}}</span>
                      </li>
                      <li v-if="monthlyExpense" class="d-flex fw-bold">
                        <span>總計支出</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(monthlyExpense) }}</span>
                      </li>
                    </ul>
                </div>

                <div class="col  d-flex flex-column align-items-center" >
                    <h5 class="text-center">收益</h5>
                    <h5 v-if="!monthlyRevenue" class="text-center mt-7">無資料</h5>

                    <div id="revenueChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(revenue, index) in monthlyRevenueData" :key="index">
                        <img v-if="revenue[0] === '月薪'" src="../../assets/images/salary.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="revenue[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ revenue[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(revenue[1] )}}</span>
                      </li>
                      <li v-if="monthlyRevenue" class="d-flex fw-bold">
                        <span>總計收益</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(monthlyRevenue) }}</span>
                      </li>
                    </ul>
                </div>
            </div>
            <h5 class="text-center fw-bold mt-3 " :class="{'text-danger':  (monthlyRevenue - monthlyExpense) < 0, 'text-success': (monthlyRevenue - monthlyExpense) > 0}">所剩金額 {{ numberComma(monthlyRevenue - monthlyExpense) }}
            </h5>
        </div>

        <div :class="{'d-none': pageStatus === '收支紀錄' || pageStatus === '每月費用、收益總計'}">
          <div class="d-flex align-items-center justify-content-center mb-5">
            <select name="" class="form-select fs-3 text-center border-0" v-model="annualSelectYear" style="width: 150px;">
              <option value="2023" selected>2023 年</option>
              <option value="2024">2024 年</option>
              <option value="2025">2025 年</option>
              <option value="2026">2026 年</option>
              <option value="2027">2027 年</option>
              <option value="2028">2028 年</option>
              <option value="2029">2029 年</option>
              <option value="2030">2030 年</option>
              <option value="2031">2031 年</option>
              <option value="2032">2032 年</option>
              <option value="2033">2033 年</option>
              <option value="2034">2034 年</option>
              <option value="2035">2035 年</option>
              <option value="2036">2036 年</option>
            </select>
            <button type="button" class="btn border" :disabled="annualSelectYear === 2023" @click="annualSelectYear = annualSelectYear - 1"><i class="bi bi-caret-up-fill text-green"></i></button>
            <button type="button" class="btn border ms-3" :disabled="annualSelectYear === 2036" @click="annualSelectYear = annualSelectYear + 1"><i class="bi bi-caret-down-fill text-green"></i></button>
          </div>

            <div class="row row-cols-lg-2 gy-5">
                <div class="col d-flex flex-column align-items-center" >
                    <h5 class="text-center">費用</h5>
                    <h5 v-if="!annualExpense" class="text-center mt-7">無資料</h5>

                    <div id="annualExpenseChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(expense, index) in annualExpenseData" :key="index">
                        <img v-if="expense[0] === '飲食'" src="../../assets/images/hamburger.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '日用品'" src="../../assets/images/shampoo.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '住宿'" src="../../assets/images/house.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '交通'" src="../../assets/images/motorcycle.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '娛樂'" src="../../assets/images/game-controller.png" width="25" height="25" alt="" class="me-2">
                        <img v-if="expense[0] === '衣飾'" src="../../assets/images/dress.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="expense[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ expense[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(expense[1] )}}</span>
                      </li>
                      <li v-if="annualExpense" class="d-flex fw-bold">
                        <span>總計支出</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(annualExpense) }}</span>
                      </li>
                    </ul>
                </div>
                <div class="col d-flex flex-column align-items-center" >
                    <h5 class="text-center">收益</h5>
                    <h5 v-if="!annualRevenue" class="text-center mt-7">無資料</h5>

                    <div id="annualRevenueChart"></div>
                    <ul class="list-unstyled col-6 mt-4" style="margin: 0 auto;">
                      <li class="border-bottom d-flex mb-2 py-2" v-for="(revenue, index) in annualRevenueData" :key="index">
                        <img v-if="revenue[0] === '月薪'" src="../../assets/images/salary.png" width="25" height="25" alt="" class="me-2">
                        <i v-if="revenue[0] === '其他'" class="bi bi-three-dots me-2 fs-5"></i>
                        <span>{{ revenue[0] }}</span>
                        <span class="ms-auto">NT$ {{ numberComma(revenue[1] )}}</span>
                      </li>
                      <li v-if="annualRevenue" class="d-flex fw-bold">
                        <span>總計收益</span>
                        <span class="ms-auto text-danger">NT$ {{ numberComma(annualRevenue) }}</span>
                      </li>
                    </ul>
                </div>
            </div>
            <h5 class="text-center fw-bold mt-3" :class="{'text-danger':  (annualRevenue - annualExpense) < 0, 'text-success': (annualRevenue - annualExpense) > 0}">所剩金額
              <span v-if="annualRevenue - annualExpense > 0">NT$ {{ numberComma(annualRevenue - annualExpense) }}</span>
              <span v-else-if="annualRevenue - annualExpense < 0"> - NT$ {{ Math.abs(annualRevenue - annualExpense) }}</span>
            </h5>
        </div>
        <DeleteAccountModal :id="accountDeleteId" :uid="uid" :open-delete-modal="openDeleteModal" :index="index" :number-comma="numberComma"></DeleteAccountModal>
    </div>
</template>
<script>
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue, set } from 'firebase/database'
import { auth, db } from '../../firebase/db'
import todoStore from '../../stores/todo'
import { mapActions } from 'pinia'
import c3 from 'c3'
import DeleteAccountModal from '../../components/DeleteAccountModal.vue'
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
      accountId: '',
      uid: '',
      categoryE: '飲食',
      moneyE: '',
      titleE: '',
      categoryR: '月薪',
      moneyR: '',
      titleR: '',
      revenueOrExpense: '',
      accountList: [],
      totalExpense: 0,
      totalRevenue: 0,
      allAccounts: {},
      recordedListDate: [],
      monthlyExpense: 0,
      annualExpense: 0,
      monthlyRevenue: 0,
      annualRevenue: 0,
      pageStatus: '收支紀錄',
      monthlySelectYear: new Date().getFullYear(),
      monthlySelectMonth: new Date().getMonth() + 1,
      annualSelectYear: new Date().getFullYear(),
      monthlyExpenseData: {},
      monthlyRevenueData: {},
      annualExpenseData: {},
      annualRevenueData: {},
      chart: [],
      revenueChart: [],
      annualExpenseChart: [],
      annualRevenueChart: [],
      accountDeleteId: '',
      index: 0,
      bgImg: ''
    }
  },
  components: {
    DeleteAccountModal
  },
  methods: {
    ...mapActions(todoStore, ['toastMessage']),
    numberComma (num) {
      const comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g
      return num.toString().replace(comma, ',')
    },
    getAllRecord () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `/accounts/${user.uid}`)
          onValue(dataRef, snapshot => {
            this.allAccounts = snapshot.val()
            if (this.allAccounts) {
              this.recordedListDate = Object.keys(this.allAccounts)
            }
          })
        } else {
          this.uid = null
          this.$router.push('/login')
          this.toastMessage('請登入', 'error')
        }
      })
    },
    getRecord () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `/accounts/${user.uid}/${this.accountId}`)
          onValue(dataRef, snapshot => {
            const account = snapshot.val()
            this.totalExpense = 0
            this.totalRevenue = 0
            if (!account) {
              this.accountList = []
              return
            }
            this.accountList = account
            this.accountList.forEach(item => {
              if (item.revenueOrExpense === 'expense') {
                this.totalExpense += item.moneyE
              } else if (item.revenueOrExpense === 'revenue') {
                this.totalRevenue += item.moneyR
              }
            })
          })
        } else {
          this.uid = null
        }
      })
    },
    getMonthlyInfo () {
      let arr = []
      const arrDate = this.recordedListDate.filter(item => {
        return item.match(`${this.monthlySelectYear}-${this.monthlySelectMonth}`)
      })
      arrDate.forEach(item => {
        arr.push(this.allAccounts[item])
      })
      arr = arr.flat()
      this.monthlyExpense = 0
      this.monthlyRevenue = 0
      const monthlyExpenseArr = arr.filter(item => item.revenueOrExpense === 'expense')
      this.monthlyExpenseData = {}
      this.monthlyRevenueData = {}

      monthlyExpenseArr.forEach(item => {
        if (!this.monthlyExpenseData[item.categoryE] && item.moneyE) {
          this.monthlyExpenseData[item.categoryE] = item.moneyE
        } else if (this.monthlyExpenseData[item.categoryE]) {
          this.monthlyExpenseData[item.categoryE] += item.moneyE
        }
      })
      this.monthlyExpenseData = Object.entries(this.monthlyExpenseData)

      this.chart = c3.generate({
        bindto: '#chart',
        data: {
          columns: this.monthlyExpenseData,
          type: 'pie',
          colors: {
            飲食: '#fe9738',
            日用品: '#64a5f8',
            住宿: '#e1a901',
            交通: '#f94730',
            娛樂: '#1d8d6a',
            衣飾: '#fe66a0',
            其他: '#212529'
          }
        }
      })
      const monthlyRevenueArr = arr.filter(item => item.revenueOrExpense === 'revenue')
      monthlyRevenueArr.forEach(item => {
        if (!this.monthlyRevenueData[item.categoryR] && item.moneyR) {
          this.monthlyRevenueData[item.categoryR] = item.moneyR
        } else if (this.monthlyRevenueData[item.categoryR]) {
          this.monthlyRevenueData[item.categoryR] += item.moneyR
        }
      })
      this.monthlyRevenueData = Object.entries(this.monthlyRevenueData)

      this.revenueChart = c3.generate({
        bindto: '#revenueChart',
        data: {
          columns: this.monthlyRevenueData,
          type: 'pie',
          colors: {
            月薪: '#5aa622',
            其他: '#212529'
          }
        }
      })

      // 總收益 費用
      arr.forEach(item => {
        if (item.revenueOrExpense === 'expense') {
          this.monthlyExpense += item.moneyE
        } else if (item.revenueOrExpense === 'revenue') {
          this.monthlyRevenue += item.moneyR
        }
      })
    },
    getAnnualInfo () {
      let arr = []
      const arrDate = this.recordedListDate.filter(item => {
        return item.match(`${this.annualSelectYear}`)
      })
      arrDate.forEach(item => {
        arr.push(this.allAccounts[item])
      })

      arr = arr.flat()
      this.annualExpense = 0
      this.annualRevenue = 0
      const annualExpenseArr = arr.filter(item => item.revenueOrExpense === 'expense')
      this.annualExpenseData = {}
      this.annualRevenueData = {}

      annualExpenseArr.forEach(item => {
        if (!this.annualExpenseData[item.categoryE] && item.moneyE) {
          this.annualExpenseData[item.categoryE] = item.moneyE
        } else if (this.annualExpenseData[item.categoryE]) {
          this.annualExpenseData[item.categoryE] += item.moneyE
        }
      })
      this.annualExpenseData = Object.entries(this.annualExpenseData)

      this.annualExpenseChart = c3.generate({
        bindto: '#annualExpenseChart',
        data: {
          columns: this.annualExpenseData,
          type: 'pie',
          colors: {
            飲食: '#fe9738',
            日用品: '#64a5f8',
            住宿: '#e1a901',
            交通: '#f94730',
            娛樂: '#1d8d6a',
            衣飾: '#fe66a0',
            其他: '#212529'
          }
        }
      })

      const annualRevenueArr = arr.filter(item => item.revenueOrExpense === 'revenue')
      annualRevenueArr.forEach(item => {
        if (!this.annualRevenueData[item.categoryR] && item.moneyR) {
          this.annualRevenueData[item.categoryR] = item.moneyR
        } else if (this.annualRevenueData[item.categoryR]) {
          this.annualRevenueData[item.categoryR] += item.moneyR
        }
      })
      this.annualRevenueData = Object.entries(this.annualRevenueData)

      this.annualRevenueChart = c3.generate({
        bindto: '#annualRevenueChart',
        data: {
          columns: this.annualRevenueData,
          type: 'pie',
          colors: {
            月薪: '#5aa622',
            其他: '#212529'
          }
        }
      })

      // 總收益 費用
      arr.forEach(item => {
        if (item.revenueOrExpense === 'expense') {
          this.annualExpense += item.moneyE
        } else if (item.revenueOrExpense === 'revenue') {
          this.annualRevenue += item.moneyR
        }
      })
    },
    // 禁止輸入數字以外的值
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-') {
        event.preventDefault()
      }
    },
    record (revenueOrExpense) {
      if ((!this.titleE || !this.moneyE) && revenueOrExpense === 'expense') {
        return
      } else if ((!this.titleR || !this.moneyR) && revenueOrExpense === 'revenue') {
        return
      }
      if (revenueOrExpense === 'expense') {
        this.accountList.push({
          revenueOrExpense,
          categoryE: this.categoryE,
          moneyE: Number(this.moneyE),
          titleE: this.titleE
        })
      } else if (revenueOrExpense === 'revenue') {
        this.accountList.push({
          revenueOrExpense,
          categoryR: this.categoryR,
          moneyR: Number(this.moneyR),
          titleR: this.titleR
        })
      }

      const reference = ref(db, `accounts/${this.uid}/${this.accountId}`)
      set(reference, this.accountList)
      this.toastMessage('紀錄成功')
      this.moneyE = ''
      this.titleE = ''
      this.moneyR = ''
      this.titleR = ''
    },
    openModal (date) {
      this.date = date
      this.accountId = `${this.selectYear}/${this.selectMonth.split('月')[0]}/${date}`
      this.accountId = this.accountId.replace(/\//g, '-')
      this.getRecord()
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
    // 確定要刪除記帳嗎
    openDeleteModal (id, index) {
      this.accountDeleteId = id
      this.index = index
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
    window.scrollTo(0, 0)
    this.date = new Date().getDate()
    this.accountId = `${this.selectYear}/${this.selectMonth.split('月')[0]}/${this.date}`
    this.accountId = this.accountId.replace(/\//g, '-')
    this.dayNum = this.dayArr[this.selectMonth.split('月')[0] - 1]
    this.countFebruaryDay(this.selectYear)
    this.getWeekday(this.selectYear, new Date().getMonth() + 1, '1')
    this.getRecord()
    this.getAllRecord()
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
    },
    monthlySelectYear () {
      this.getMonthlyInfo()
    },
    monthlySelectMonth () {
      this.getMonthlyInfo()
    },
    pageStatus () {
      if (this.pageStatus === '每月費用、收益總計') {
        this.getMonthlyInfo()
      } else if (this.pageStatus === '每年費用、收益總計') {
        this.getAnnualInfo()
      }
    },
    annualSelectYear () {
      this.getAnnualInfo()
    }
  }
}
</script>
<style>
    .calendar tbody tr td:hover{
        background-color: #deebf6;
        cursor: pointer;
    }

    .calendar tbody tr td{
        color: #79827f;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    }
</style>
