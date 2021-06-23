import ReactFlow, {
  Controls,
  Background,
} from 'react-flow-renderer';
import elements from './Flow/Edge';
import styles from "../styles/Skills.module.scss";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const Skills = () => {
  return (<>
            <div className={styles.skillFlow}>
              <div className={styles.fixFlow}>
                {/* what ithalsdjflaskd asdf */}
                <span></span>
                <ReactFlow 
                  elements={elements} 
                  onLoad={onLoad}
                  zoomOnScroll={false}
                  showFitView={false}
                  showZoom={false}  
                >
                    <Controls />
                    <Background />
                </ReactFlow>
              </div>
            </div>
        </>
  )
}

export default Skills
