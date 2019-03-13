<template>
  <div>
    <x-header>问卷测评</x-header>

    <tab>
      <tab-item selected @on-item-click="anxiety">焦虑问卷</tab-item>
      <tab-item @on-item-click="depressed">抑郁问卷</tab-item>
    </tab>
    <div v-show="anxietyClick">
      <group v-for="question in questions" :key="question.id" :title="question.id + '.' + question.title"
             style="border-bottom: 10px solid #F5F5F5;" @click.native="activeQuestion(question.id)">
        <radio :selected-label-style="{color: '#FF9900'}" :options="options" @on-change="change" style="font-size: 16px"></radio>
      </group>

      <flexbox>
        <flexbox-item :span="3"></flexbox-item>
        <flexbox-item :span="6">
          <x-button type="primary" @click.native="submitScore">提交</x-button>
        </flexbox-item>
        <flexbox-item :span="3"></flexbox-item>
      </flexbox>
      <alert v-model="showAscore" title="测试结果" :content="'得分：' + sumAscore + ',您的焦虑情况为：'+ grade"></alert>
    </div>

    <div v-show="depressedClick">
      <group v-for="question in questionDepress" :key="question.id" :title="question.id + '.' + question.title"
             style="border-bottom: 10px solid #F5F5F5;" @click.native="activeDQuestion(question.id)">
        <radio :selected-label-style="{color: '#FF9900'}" :options="optionsD" @on-change="changeD" style="font-size: 16px"></radio>
      </group>

      <flexbox>
        <flexbox-item :span="3"></flexbox-item>
        <flexbox-item :span="6">
          <x-button type="primary" @click.native="submitDepressed">提交</x-button>
        </flexbox-item>
        <flexbox-item :span="3"></flexbox-item>
      </flexbox>
      <alert v-model="showDscore" title="测试结果" :content="'得分：' + sumDscore + ',您的抑郁情况为：'+ grade"></alert>
    </div>
  </div>

</template>

<script>
import { XHeader,Flexbox, FlexboxItem, Divider, XImg, Icon,XButton,ViewBox,Group,XInput,XTextarea,Radio,Alert,Tab, TabItem} from 'vux'

export default {
  name: "Question",
  components: {
    XTextarea,
    XHeader,
    Flexbox,
    FlexboxItem,
    Divider,
    XImg,
    Icon,
    XButton,
    ViewBox,
    Group,XInput,Radio,Alert,Tab, TabItem
  },
  data() {
    return {
      activeQid: 0,
      activeDQid: 0,
      showAscore: false,
      showDscore: false,
      grade: '',
      anxietyClick: true,
      depressedClick: false,
      options: [
        {
          key: '1',
          value: '没有或很少时间'
        }, {
          key: '2',
          value: '小部分时间'
        }, {
          key: '3',
          value: '相当多时间'
        }, {
          key: '4',
          value: '绝大部分或全部时间'
        }
      ],
      optionsD: [
        {
          key: '1',
          value: '没有或很少时间'
        }, {
          key: '2',
          value: '小部分时间'
        }, {
          key: '3',
          value: '相当多时间'
        }, {
          key: '4',
          value: '绝大部分或全部时间'
        }
      ],
      questions: [
        {
          id: 1,
          title: '我觉得比平时容易紧张和着急。',
          score: 0
        },
        {
          id: 2,
          title: '我无缘无故地感到害怕。',
          score: 0
        },
        {
          id: 3,
          title: '我容易心里烦乱或觉得惊恐。',
          score: 0
        },
        {
          id: 4,
          title: '我觉得我可能将要发疯。',
          score: 0
        },
        {
          id: 5,
          title: '我觉得一切都很好，也不会发生不幸。',
          score: 0
        },
        {
          id: 6,
          title: '我手脚发抖打颤。',
          score: 0
        },
        {
          id: 7,
          title: '我因为头痛、头颈痛和背痛而苦恼。',
          score: 0
        },
        {
          id: 8,
          title: '我觉得容易衰弱和疲乏。',
          score: 0
        },
        {
          id: 9,
          title: '我觉得心平气和，并且容易安静坐着。',
          score: 0
        },
        {
          id: 10,
          title: '我觉得心跳得很快。',
          score: 0
        },
        {
          id: 11,
          title: '我因为一阵阵头晕而苦恼。',
          score: 0
        },
        {
          id: 12,
          title: '我有晕倒发作，或觉得要晕倒似的。',
          score: 0
        },
        {
          id: 13,
          title: '我吸气、呼气都感到很容易。',
          score: 0
        },
        {
          id: 14,
          title: '我的手脚麻木和刺痛。',
          score: 0
        },
        {
          id: 15,
          title: '我因为胃痛和消化不良而苦恼。',
          score: 0
        },
        {
          id: 16,
          title: '我的小便次数频繁。',
          score: 0
        },
        {
          id: 17,
          title: '我的手脚常常是干燥温暖的。',
          score: 0
        },
        {
          id: 18,
          title: '我时常脸红发热。',
          score: 0
        },
        {
          id: 19,
          title: '我容易入睡，并且一夜睡得很好。',
          score: 0
        },
        {
          id: 20,
          title: '我经常做噩梦。',
          score: 0
        },
      ],
      questionDepress: [
        {
          id: 1,
          title: '我觉得闷闷不乐，情绪低沉。',
          score: 0
        },
        {
          id: 2,
          title: '我觉得一天之中早晨最好。',
          score: 0
        },
        {
          id: 3,
          title: '我一阵阵哭出来或觉得想哭。',
          score: 0
        },
        {
          id: 4,
          title: '我晚上睡眠不好。',
          score: 0
        },
        {
          id: 5,
          title: '我吃得跟平常一样多。',
          score: 0
        },
        {
          id: 6,
          title: '我跟异性密切接触时和以往一样感到愉快  。',
          score: 0
        },
        {
          id: 7,
          title: '我发现我的体重在下降。',
          score: 0
        },
        {
          id: 8,
          title: '我有便秘的苦恼。',
          score: 0
        },
        {
          id: 9,
          title: '我心跳比平常快。',
          score: 0
        },
        {
          id: 10,
          title: '我无缘无故地感到疲乏。',
          score: 0
        },
        {
          id: 11,
          title: '我的头脑跟平常一样清楚。',
          score: 0
        },
        {
          id: 12,
          title: '我觉得经常做的事并没有困难。',
          score: 0
        },
        {
          id: 13,
          title: '我感到不安，心情难以平静。',
          score: 0
        },
        {
          id: 14,
          title: '我对未来抱有希望。',
          score: 0
        },
        {
          id: 15,
          title: '我比平常更容易生气激动。',
          score: 0
        },
        {
          id: 16,
          title: '我觉得做出决定是很容易的。',
          score: 0
        },
        {
          id: 17,
          title: '我觉得自己是个有用的人，有人需要我。',
          score: 0
        },
        {
          id: 18,
          title: '我的生活过得很有意思。',
          score: 0
        },
        {
          id: 19,
          title: '我认为如果我死了，别人会过得好些。',
          score: 0
        },
        {
          id: 20,
          title: '平常感兴趣的事情我仍然感兴趣。',
          score: 0
        },
      ],
    }
  },
  computed: {
    sumAscore() {
      let sum = 0
      for (let i = 0; i < this.questions.length; i++) {
        sum += Number(this.questions[i].score)
      }
      return sum * 1.25
    },
    sumDscore() {
      let sum = 0
      for (let i = 0; i < this.questionDepress.length; i++) {
        sum += Number(this.questionDepress[i].score)
      }
      return sum * 1.25
    }
  },
  methods: {
    // change(value, label) {
    //   console.log('change:', value, label)
    // },
    depressed() {
      this.anxietyClick = false
      this.depressedClick = true
    },
    anxiety() {
      this.anxietyClick = true
      this.depressedClick = false
    },
    submitScore() {
      this.showAscore = true
      //正常，轻度，中度，重度
      // <!--焦虑SAS标准分的分界值为50分，其中50—59分为轻度焦虑，60—69分为中度焦虑，70分以上为重度焦虑。-->
      const score = this.sumAscore
      if (score < 50) {
        this.grade = '正常'
      } else if (score >= 50 && score <= 59) {
        this.grade = '轻度'
      } else if (score >= 60 && score <= 69) {
        this.grade = '中度'
      } else {
        this.grade = '重度'
      }
    },
    submitDepressed() {
      this.showDscore = true
      //正常，轻度，中度，重度
      // <!--焦虑SAS标准分的分界值为50分，其中50—59分为轻度焦虑，60—69分为中度焦虑，70分以上为重度焦虑。-->
      const score = this.sumDscore
      if (score < 50) {
        this.grade = '正常'
      } else if (score >= 50 && score <= 59) {
        this.grade = '轻度'
      } else if (score >= 60 && score <= 69) {
        this.grade = '中度'
      } else {
        this.grade = '重度'
      }
    },
    activeQuestion(id){
      this.activeQid = id
    },
    activeDQuestion(id){
      this.activeDQid = id
    },
    change(value,label) {
      // label是具体的内容
      this.questions[this.activeQid - 1].score = value
    },
    changeD(value,label) {
      this.questionDepress[this.activeDQid - 1].score = value

    }
  }
}
</script>

<style scoped>

</style>
