import subprocess
import sys
import os
import tempfile
import platform

MAX_EXECUTION_TIME = 10  # seconds
MAX_OUTPUT_LENGTH = 2000


def run_python_code(code: str, stdin_input: str = "") -> dict:
    """
    Safely execute Python code in a subprocess with timeout.
    Returns stdout, stderr, and execution time.
    """
    # Write code to a temp file
    with tempfile.NamedTemporaryFile(
        mode='w', suffix='.py', delete=False, encoding='utf-8'
    ) as tmp:
        tmp.write(code)
        tmp_path = tmp.name

    try:
        result = subprocess.run(
            [sys.executable, tmp_path],
            input=stdin_input,
            capture_output=True,
            text=True,
            timeout=MAX_EXECUTION_TIME,
            env={**os.environ, 'PYTHONDONTWRITEBYTECODE': '1'}
        )

        stdout = result.stdout[:MAX_OUTPUT_LENGTH]
        stderr = result.stderr[:MAX_OUTPUT_LENGTH]

        return {
            "success": result.returncode == 0,
            "stdout": stdout,
            "stderr": stderr,
            "return_code": result.returncode,
            "timed_out": False
        }

    except subprocess.TimeoutExpired:
        return {
            "success": False,
            "stdout": "",
            "stderr": f"Execution timed out after {MAX_EXECUTION_TIME} seconds.",
            "return_code": -1,
            "timed_out": True
        }
    except Exception as e:
        return {
            "success": False,
            "stdout": "",
            "stderr": str(e),
            "return_code": -1,
            "timed_out": False
        }
    finally:
        try:
            os.unlink(tmp_path)
        except Exception:
            pass
