/**
 * 角色管理结构
 */
import {
  /**
   * @module 数据同步
   */
  DATA,
  DATA_SYNC,
  DATA_SYNC_MANUAL,
  /**
   * @module 标签集合
  */
  LABEL,
  // 标签管理
  LABEL_MANAGEMENT,
  LABEL_MANAGEMENT_MANAGEMENT,
  /**
   * @module 硬件汇总
   */
  HARDWARE,
  // 节点列表
  HARDWARE_NODE,
  HARDWARE_NODE_DOWNLOAD,
  /**
   * @module 设备管理
   */
  EQUIPMENT,
  // 设备列表
  EQUIPMENT_LIST,
  /**
   * @module 算法研发
   */
  ARITHMETIC,
  // 算法管理
  ARITHMETIC_MANAGEMENT,
  ARITHMETIC_MANAGEMENT_ADD_CODE,
  ARITHMETIC_MANAGEMENT_MAP,
  ARITHMETIC_MANAGEMENT_DELETE,
  ARITHMETIC_MANAGEMENT_MODIFY_REMARK,
  // 推理任务
  ARITHMETIC_INFERENCE,
  ARITHMETIC_INFERENCE_BATCH_ADD,
  ARITHMETIC_INFERENCE_BATCH_RESTART,
  ARITHMETIC_INFERENCE_BATCH_CANCEL,
  ARITHMETIC_INFERENCE_CANCEL_TASK,
  ARITHMETIC_INFERENCE_RESTART_TASK,
  // 学习任务
  ARITHMETIC_LEARN,
  ARITHMETIC_LEARN_BATCH_ADD,
  ARITHMETIC_LEARN_BATCH_RESTART,
  ARITHMETIC_LEARN_BATCH_CANCEL,
  ARITHMETIC_LEARN_CANCEL_TASK,
  ARITHMETIC_LEARN_RESTART_TASK,
  /**
   * @module 账户管理
   */
  ACCOUNT,
  // 用户管理
  ACCOUNT_PERSON,
  ACCOUNT_PERSON_ADD,
  ACCOUNT_PERSON_MODIFY,
  ACCOUNT_PERSON_ENABLE_ACCOUNT,
  ACCOUNT_PERSON_DISABLE_ACCOUNT,
  ACCOUNT_PERSON_DELETE,
  //  角色管理
  ACCOUNT_ROLE,
  ACCOUNT_ROLE_ADD,
  ACCOUNT_ROLE_MODIFY,
  ACCOUNT_ROLE_DELETE,
  // 部门管理
  ACCOUNT_DEPARTMENT,
  ACCOUNT_DEPARTMENT_ADD,
  ACCOUNT_DEPARTMENT_MODIFY,
  ACCOUNT_DEPARTMENT_DELETE

} from './permission'

/**
 * @name 页面添加操作
 * */
DATA_SYNC.children = [
  DATA_SYNC_MANUAL
]

LABEL_MANAGEMENT.children = [
  LABEL_MANAGEMENT_MANAGEMENT
]

HARDWARE_NODE.children = [
  HARDWARE_NODE_DOWNLOAD
]

EQUIPMENT_LIST.children = []

ARITHMETIC_MANAGEMENT.children = [
  ARITHMETIC_MANAGEMENT_ADD_CODE,
  ARITHMETIC_MANAGEMENT_MAP,
  ARITHMETIC_MANAGEMENT_DELETE,
  ARITHMETIC_MANAGEMENT_MODIFY_REMARK
]

ARITHMETIC_INFERENCE.children = [
  ARITHMETIC_INFERENCE_BATCH_ADD,
  ARITHMETIC_INFERENCE_BATCH_RESTART,
  ARITHMETIC_INFERENCE_BATCH_CANCEL,
  ARITHMETIC_INFERENCE_CANCEL_TASK,
  ARITHMETIC_INFERENCE_RESTART_TASK
]

ARITHMETIC_LEARN.children = [
  ARITHMETIC_LEARN_BATCH_ADD,
  ARITHMETIC_LEARN_BATCH_RESTART,
  ARITHMETIC_LEARN_BATCH_CANCEL,
  ARITHMETIC_LEARN_CANCEL_TASK,
  ARITHMETIC_LEARN_RESTART_TASK
]

ACCOUNT_PERSON.children = [
  ACCOUNT_PERSON_ADD,
  ACCOUNT_PERSON_MODIFY,
  ACCOUNT_PERSON_ENABLE_ACCOUNT,
  ACCOUNT_PERSON_DISABLE_ACCOUNT,
  ACCOUNT_PERSON_DELETE
]

ACCOUNT_ROLE.children = [
  ACCOUNT_ROLE_ADD,
  ACCOUNT_ROLE_MODIFY,
  ACCOUNT_ROLE_DELETE
]

ACCOUNT_DEPARTMENT.children = [
  ACCOUNT_DEPARTMENT_ADD,
  ACCOUNT_DEPARTMENT_MODIFY,
  ACCOUNT_DEPARTMENT_DELETE
]

/**
 * @name 模块添加页面
 * */

DATA.children.push(DATA_SYNC)

ARITHMETIC.children.push(
  ARITHMETIC_MANAGEMENT,
  ARITHMETIC_INFERENCE,
  ARITHMETIC_LEARN
)
// 模块添加子集页面
LABEL.children.push(LABEL_MANAGEMENT)

HARDWARE.children.push(HARDWARE_NODE)

EQUIPMENT.children.push(EQUIPMENT_LIST)

ACCOUNT.children.push(
  ACCOUNT_PERSON,
  ACCOUNT_ROLE,
  ACCOUNT_DEPARTMENT
)

export default [
  DATA,
  ARITHMETIC,
  LABEL,
  HARDWARE,
  EQUIPMENT,
  ACCOUNT
]
